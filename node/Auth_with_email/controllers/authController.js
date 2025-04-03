const User = require('../models/user_model');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const sendEmail = require('../node_mailer/email');

exports.signup = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);

        const token = jwt.sign({ id: newUser._id }, process.env.SECRET_STR, {
            expiresIn: process.env.LOGIN_EXPIRES
        });

        res.status(201).json({
            status: "success",
            token,
            data: {
                user: newUser
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Error signing up user'
        });
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                status: 'fail',
                message: 'Please provide email and password'
            });
        }

        const user = await User.findOne({ email });
        // Add logic to check password and generate token
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Error logging in user'
        });
    }
};

exports.forgotPassword = async (req, res, next) => {
    let user;
    try {
        user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const resetToken = user.createResetPasswordtoken();
        await user.save();

        const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${resetToken}`;
        const message = `We have received a password reset request. Please use the link below to reset your password:\n\n${resetUrl}\n\nThis link will be valid for 10 minutes.`;

        await sendEmail({
            email: user.email,
            subject: 'Password Change Request',
            message: message
        });

        res.status(200).json({
            status: 'success',
            message: 'Password reset link sent to user email'
        });
    } catch (err) {
        console.error('Error sending email:', err);
        if (user) {
            user.passwordResetToken = undefined;
            user.passwordResetTokenExpires = undefined;
            await user.save();
        }

        return res.status(500).json({
            status: 'error',
            message: 'There was an error sending the email. Please try again later.'
        });
    }
};

exports.passwordreset = (req, res, next) => {
    res.status(200).json({
        status: "success",
        token: '',
        user: {}
    });
};
// const mongoose =require('mongoose')
// const bcrypt=require('bcryptjs')
// const crypto=require('crypto')
// const userSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:[true,'Pls enter your name']

//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     password:{
//         type:String,
//         require:true,
//         unique:true
//     },
//     passwordChangedAt:Date,
//     passwordResetToken:String,
//     passwordResetTokenExpires:Date

// })


// //Presave mongoose middleware
// //(Before saving a password directly to the database we can encrypt it )




// userSchema.pre('save',async function(next){
//     if(!this.isModified('password')) return next();   //here password is not modified so no need to do any functions

//     //encrypt the password before saving it
//     this.password=await bcrypt.hash(this.password,12);
//     next();
// })


// userSchema.methods.createResetPasswordtoken=()=>{
//     const resetToken=crypto.randomBytes(32).toString('hex');

//     this.passwordResetToken=crypto.createHash('sha256').update(resetToken).digest('hex')
//     this.passwordResetTokenExpires=Date.now()+10*60*1000;
//     console.log(resetToken,this.passwordResetToken)
//     return resetToken;
// }
// const userModel=mongoose.model('user',userSchema)
// module.exports=userModel


const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetTokenExpires: Date
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    next();
});

userSchema.methods.createResetPasswordtoken = function() {
    const resetToken = crypto.randomBytes(32).toString('hex');

    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.passwordResetTokenExpires = Date.now() + 10 * 60 * 1000;
    console.log(resetToken, this.passwordResetToken);
    return resetToken;
};

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
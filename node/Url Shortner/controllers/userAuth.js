const { users } = require("../models/userAuth");

async function userSignup(req,res){
    const{name,email,password}=req.body;
    await users.create({
        name,email,password 
    });
    return res.reder("home");
}

module.exports={userSignup};
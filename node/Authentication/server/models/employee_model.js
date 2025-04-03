const mongoose=require('mongoose');
const Employee=new mongoose.Schema({
    name:{type:String},email:{type:String},password:{type:String},
});


const employee=mongoose.model("employees",Employee)
module.exports=employee;
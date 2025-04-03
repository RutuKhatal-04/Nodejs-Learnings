const express=require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const employee=require('./models/employee_model');

const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employees");




app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    employee.findOne({email:email}).then(user=>{
        if(user){
            if(user.password===password){
                res.json('success')
            }
            else{
                res.json('password is incorrect')
            }
        }
        else{
            res.json('no record existed')
        }
    })
})
app.post('/register', (req, res) => {
    console.log(req.body); // Log the request body
    employee.create(req.body)
        .then(employees => {
            console.log('Employee added:', employees); // Log the added employee
            res.json(employees);
        })
        .catch(err => {
            console.error('Error:', err); // Log any errors
            res.json(err);
        });
});

app.listen(8000,()=>console.log('Server started'));
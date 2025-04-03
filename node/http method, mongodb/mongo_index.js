const express=require('express');
const {connectMongoDb}=require('./MVC/connection');
const userRouter=require('./MVC/routes/user_routes');

const app=express();
const PORT= 8000;

//Connection
mongoose.connect("mongodb://127.0.0.1:27017/first-proj").then(()=>console.log("Mongodb Connexted")).catch((err)=>console.log("Mongo Error",err));


//Schema

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,

    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    gender:{
        type:String,
    },
    jobTitle:{
        type:String,
        required:true,
    },
},{timestamps:true});

const User=mongoose.model("user",userSchema);

app.use(express.urlencoded({extended:false}));
// app.get("/api/user",(req,res)=>{
//    const html = `
//    <ul>
//    ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
//    </ul>
//    `;
//    res.send(html);
// });




//Routes
app.get("/user",async(req,res)=>{
    const alldbUser=await User.find({});
    const html = `
    <ul>
    ${alldbUser.map((user)=>`<li>${user.firstName}</li>`).join("")}
    </ul>
    `;
   res.send(html);
});
app.get("/user/:id",async(req,res)=>{
    const user=await User.findById(req.params.id);
    if(!user) return res.status(404).json({msg:"user not found"});
    return res.json(user);
    
});

app.patch("/user/:id",async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id,{lastName:"Changed"});
return res.json({status:"Success"});
});
app.delete("/user/:id",async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:"Success"});
})
app.post("/api/user",async(req,res)=>{
    const body=req.body;
    if(!body||!body.first_name||!body.last_name||!body.email||!body.gender||!body.jobTitle){
        return res.status(400).json({msg:"All fields are required"});
    }




const result=await User.create({firstName:body.first_name,
    lastName:body.last_name,
    email:body.email,
    gender:body.gender,
    jobTitle:body.jobTitle,
});

console.log("result",result);
return res.status(201).json({msg:"success"});
});

app.listen(8000,()=>{console.log("Server started");});
const http =require('http');

const express=require('express');


const app=express();

app.get("/",(req,res)=>{
    return res.send("hello from home page");
});


//url need to be like this
// http://localhost:8000/about?name=rutu&dep=ai_ds
app.get("/about",(req,res)=>{
    return res.send(`Hello form about page hey  ${req.query.name} you are ${req.query.dep}`);
});



const myServer=http.createServer(app);
myServer.listen(8000,()=>console.log("Server started"));

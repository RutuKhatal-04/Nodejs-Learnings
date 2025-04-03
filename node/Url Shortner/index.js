const express=require('express');
const app=express();
const urlRoute=require("./routes/url");
const URL =require("./models/url");
const path=require('path');
const{connectToMongoDb}=require('./connect');
const PORT=8001;
const userRoute=require("./routes/userAuth");
//const staticRoutes=require("./views/signup");


connectToMongoDb('mongodb://127.0.0.1:27017/short-url').then(()=>console.log("Mongodb connected"));
app.use(express.json());



//template engine
app.set("view engine","ejs");
app.set("views",path.join("./views"))



app.get("/test",async(req,res)=>{
    const allUrls=await URL.find({});
    return res.render('home',{
        urls:allUrls,
    });
});


app.use("/url",urlRoute);
app.use("/user",userRoute);
//app.use("/",staticRoutes);


// Route to render the signup EJS template
app.get('/signup', (req, res) => {
    return res.render('signup');
});
app.get('/url/:shortId',async(req,res)=>{
    const shortId=req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },{$push:{
        visitHistory:{timestamp:Date.now()},
    }});
    res.redirect(entry.redirectUrl);
})




app.listen(PORT,()=>console.log(`App is started on port ${PORT}`));
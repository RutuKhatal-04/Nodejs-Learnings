const express=require('express');
const router=express.Router();

router.get("/users",(req,res)=>{
    return res.json(users);
});



// app.get("/api/users",(req,res)=>{
//    const html = `
//    <ul>
//    ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
//    </ul>
//    `;
//    res.send(html);
// });


 
// //Dynamic path parameters

// app.get("/api/users/:id",(req,res)=>{
//     const id=Number(req.params.id);
//     const user=users.find(user=>user.id===id);
//     return res.send(user);
// });
// app.listen(PORT,()=>{console.log("Server Started");});



 

// ///POST REQUEST /api/users (Browsers by default GET Request)  Create new user


// app.post('/api/users',(req,res)=>{
//     return res.json({status:"pending"});

// });



// //Patch

// app.patch("/api/users/:id",(req,res)=>{
//     return res.json({status:"pending"});
// });


// //Delete
// app.delete("/api/users/:id",(req,res)=>{
//     return res.json({status:"pending"});
// });




//Instead of writing no.of time route we can merge it 
//below is in the form after merging
// app.route("/api/users/:id").get((req,res)=>{
//     const id=Number(req.params.id);
//     const user=users.find((user)=>{
//         return user.id === id;
//     });
//     return res.json(user);
// }).patch((req,res)=>{
//     return res.json({status:"pending"});
// }).delete((req,res)=>{
//     return res.json({status:"pending"});
// });



router.use(express.urlencoded({extended:false}));
router.post('/api/users',(req,res)=>{
    const body=req.body;
    console.log("Body",body);
    
    return res.json({status:"pending"});

});






//Routes
router.get("/user",async(req,res)=>{
    const alldbUser=await User.find({});
    const html = `
    <ul>
    ${alldbUser.map((user)=>`<li>${user.firstName}</li>`).join("")}
    </ul>
    `;
   res.send(html);
});
router.get("/user/:id",async(req,res)=>{
    const user=await User.findById(req.params.id);
    if(!user) return res.status(404).json({msg:"user not found"});
    return res.json(user);
    
});

router.patch("/user/:id",async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id,{lastName:"Changed"});
return res.json({status:"Success"});
});
router.delete("/user/:id",async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:"Success"});
});

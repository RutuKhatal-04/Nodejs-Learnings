const http=require("http");
const myserver=http.createServer((req,res)=>{
    console.log(req.headers);
    console.log("New Req Res");
    res.end("Hello from Server");
});

myserver.listen(8001,()=>{
    
    console.log("Server started");
});

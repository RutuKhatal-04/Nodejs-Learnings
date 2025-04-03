const http =require("http");
const fs=require("fs");
const url=require('url');
const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()}:${req.url}  ${req.method}New req rec\n`;
    const myUrl=url.parse(req.url,true);
    // console.log(myUrl);
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(myUrl.pathname){
            case '/': res.end("Home page");
            break;
            case '/about':
            // const qp= res.end("About page");
            const username=myUrl.query.name;
            res.end(`Hello ${username}`);
            break;
            case "/signup":
            if (req.method===GET) res.end("This is for signup");
            else if (req.method===POST){
                //Db query 
                res.end("Success");
            }
            break;
            default: res.end('404 not found');
            
        }
    
    });

});

myServer.listen(8000,()=>console.log("Server started"));
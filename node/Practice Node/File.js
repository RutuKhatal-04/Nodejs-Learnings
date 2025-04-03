const fs=require("fs");


// //Synchronous
// fs.writeFileSync("./test.txt","Hey there");

//Asynchronous
// fs.writeFileSync("./test.txt","Hey there asynchronous",err=>{});


// const result=fs.readFileSync("./contact.txt","utf-8");
// console.log(result);



fs.appendFileSync("./contact.txt",`${Date.now()}HEY THERE \n`);
fs.cpSync("./test.txt","./copy.txt");
//to delete file
// fs.unlinkSync("./copy.txt");
console.log(fs.statSync("./test.txt"));
console.log(fs.statSync("./test.txt").isFile());
fs.mkdirSync("my-docs/a/b",{recursive:true});
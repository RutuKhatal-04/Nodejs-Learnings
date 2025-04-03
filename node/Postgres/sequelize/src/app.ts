import express from 'express';
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoute";
import sequelize from './config/database';
import { start } from 'repl';

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/api/users",userRoutes);
app.listen(3000,()=>{
    console.log("server running");
});

const startServer=async()=>{
    try{
        await sequelize.authenticate()
        console.log("connection authenticated");
        await sequelize.sync({alter:true});
        console.log("database synchronized")

      
    }catch(error)
    {
        console.log("error connecting to db")
    }
};

startServer();

import express from "express";
import bodyParser from 'body-parser';
import authroutes from "./routes/authroutes";
import { authenticateJWT } from "./middleware/auth";
// import authRoutes from './routes/authroutes';
// import { authenticateJWT, authenticateJWTcust } from './middleware/authMiddleware';
// import "./models/associations";
// import cron from "node-cron";


const app=express();
const PORT=8000;
app.use(express.json());
app.use(bodyParser.json());
app.use('/auth',authroutes);
app.use('/home',authenticateJWT("Admin"),authroutes);
app.use('/employee',authenticateJWT("Employee"),authroutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


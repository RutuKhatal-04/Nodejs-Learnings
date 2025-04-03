"use strict";
// import { Sequelize,DataType, DataTypes } from "sequelize";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const sequelize = new Sequelize({
//     database: "postgres",
//     username: "postgres",
//     password: "postgres@25",
//     host: "localhost",
//     dialect: "postgres" 
// });
// // //Defien user model
// // const User= sequelize.define("User",{
// //     fname:{
// //         type:DataTypes.STRING
// //     },
// //     lname:{
// //         type:DataTypes.STRING
// //     },
// //     email:{
// //         type:DataTypes.STRING
// //     }
// // });
// // ///Synchronize model  with the database  (create table if it doesnt exist)
// // sequelize.sync().then(()=>{console.log("Database synchronized")}).catch(err=>{console.error("Error Synchronized the database",err)})
// // sequelize.authenticate().then(()=>{
// //     console.log("Connection successful")
// // })
// // .catch(err=>{
// //     console.error("Error while syncronizing the database ",err)
// // })
// // //User create
// // User.create({
// //     fname:"Rutu",
// //     lname:"Khatal",
// //     email:"abc@gmail.com"
// // }).then(
// //     user=>{console.log("user created",user.toJSON())}
// // ).catch(error=>{console.log("Error creating user",error)})
// // const { Sequelize, DataTypes } = require('sequelize');
// // const sequelize = new Sequelize('postgres://user:password@localhost:5432/mydatabase');
// const User = sequelize.define('User', {
//   fname: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lname: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// }, {
//   timestamps: true
// });
// (async () => {
//   try {
//     await sequelize.sync(); // This will create the table if it doesn't exist
//     console.log('Database synchronized');
//     const newUser = await User.create({
//       fname: 'Rutu',
//       lname: 'Khatal',
//       email: 'abc@gmail.com'
//     });
//     console.log('User created:', newUser.toJSON());
//   } catch (error) {
//     console.error('Error creating user:', error);
//   } finally {
//     await sequelize.close();
//   }
// })();
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const Userservies_1 = require("./services/Userservies");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, Userservies_1.createUser)(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'Unexpected error' });
        }
    }
}));
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, Userservies_1.getAllUsers)();
        res.status(200).json(users);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'Unexpected error' });
        }
    }
}));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
// Placeholder functions for createPost and getAllPosts
function createPost(body) {
    throw new Error('Function not implemented.');
}
function getAllPosts() {
    throw new Error('Function not implemented.');
}

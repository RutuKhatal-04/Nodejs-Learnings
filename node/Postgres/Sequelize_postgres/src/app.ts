// import { Sequelize,DataType, DataTypes } from "sequelize";

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
import 'reflect-metadata';

import express from 'express';
import { createUser, getAllUsers } from './services/Userservies';
// import { createPost, getAllPosts } from './services/postService';
import sequelize from './database/config';
const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unexpected error' });
    }
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unexpected error' });
    }
  }
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Placeholder functions for createPost and getAllPosts
function createPost(body: any) {
  throw new Error('Function not implemented.');
}

function getAllPosts() {
  throw new Error('Function not implemented.');
}
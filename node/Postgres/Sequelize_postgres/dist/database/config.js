"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("../models/User");
// import { Post } from '../models/Post';
const sequelize = new sequelize_typescript_1.Sequelize({
    database: 'postgres',
    username: 'postgres',
    password: 'postgres@25',
    host: 'localhost',
    dialect: 'postgres',
    models: [User_1.User] // Add models here
});
exports.default = sequelize;

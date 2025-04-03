import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/User';
// import { Post } from '../models/Post';

const sequelize = new Sequelize({
  database: 'postgres',
  username: 'postgres',
  password: 'postgres@25',
  host: 'localhost',
  dialect: 'postgres',
  models: [User] // Add models here
});

export default sequelize;
import sequelize from '../database/config';
import { User } from './User';
// import { Post } from './Post';

(async () => {
  try {
    await sequelize.sync({ force: true }); // Use { force: true } only for development
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
})();

export { User };

import { User } from '../models/User';

interface UserData {
  fname: string;
  lname: string;
  email: string;
}

export const createUser = async (userData: UserData): Promise<User> => {
  try {
    const user = await User.create(userData as any); // Type assertion to bypass type checking
    return user;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Error creating user: ' + error.message);
    } else {
      throw new Error('Unexpected error');
    }
  }
};

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Error fetching users: ' + error.message);
    } else {
      throw new Error('Unexpected error');
    }
  }
};

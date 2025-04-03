import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  fname!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  lname!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  email!: string;
}
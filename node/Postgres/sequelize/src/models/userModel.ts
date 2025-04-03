import sequelize from "../config/database";
import {DataTypes,Model} from 'sequelize'

class User extends Model{
    public id!:number;
    public name!:string;
    public age!:number;
    public email!:string;
    public readonly createdAt!:Date;
    public readonly UpdatedAt!:Date;
}
 
User.init({
  id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
  },
   name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
},
{
    sequelize,
    tableName:'users',
    timestamps:true,
});

export default User;
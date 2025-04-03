import {Sequelize} from "sequelize";

const sequelize=new Sequelize("DemoSequelize","postgres","root",{
    host:"localhost",
    dialect:"postgres",
});

export default sequelize; 
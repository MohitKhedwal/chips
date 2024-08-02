import { Sequelize } from "sequelize";
import { configDotenv } from 'dotenv';
configDotenv({
    path:"./.env"
})

const sequelize= new Sequelize(
    process.env.DB_NAME, // database
    process.env.DB_USER, // user
    process.env.DB_PASSWORD,// password
    {
        host: process.env.DB_HOST,
        dialect: "postgres",
    }
)

const connectdb =async() =>{

    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch(e){
        console.log('Unable to connect to the database:', e);
    }
};
export { connectdb,sequelize};

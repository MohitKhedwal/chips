import pkg from 'pg';
const { Pool } = pkg;
import { configDotenv } from 'dotenv';
configDotenv({
    path:"./.env"
})

const pool = new Pool({
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_NAME
});

export default pool;
// {
//     "email":"mohit21@hotmail.com",
//     "password":"12345"
// }
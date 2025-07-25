import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const mySqlConnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    password: process.env.MYSQL_PASSWORD,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DB
});

// mySqlConnection.connect(error => {
//     if (error) {
//         console.error(error.message);
//     }
//     console.log("Database Connected");
// });

export default mySqlConnection;
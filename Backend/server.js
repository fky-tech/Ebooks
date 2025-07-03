import express from 'express';
import dotenv from 'dotenv';
import mySqlConnection from './Config/db.js';
import router from './Routes/route.js';

dotenv.config();

// use port number from .env or the fallback port num 3000
const port = process.env.PORT || 3000;

const app = express();

// a middleware used to parse key-value pairs
app.use(express.json());

// a middleware used to parse url-enocoded data
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // mySqlConnection;
})

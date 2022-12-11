// import fs from 'fs';
// import https from 'https';
import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import mongoose from 'mongoose';

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;


const server = http.createServer(
//     {
//     key: fs.readFileSync('./key.pem'),
//     cert: fs.readFileSync('./cert.pem')
// },
 app);

const connectDB = async()=>{
    try {
        const res = await mongoose.connect(MONGO_URL)
        res && console.log('DB connected')
    } catch (error) {
        console.log(`error in connecting to DB: ${error}`)
    }
}

connectDB();

server.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
})
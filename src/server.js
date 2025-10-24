require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('../src/database/config/config');

const router = require('./routes/apiConfig/api');

// Middleware
app.use(express.json());

app.use('/api' , router);

//Server
app.listen(process.env.SERVER, () => {
    try{
        console.log("Server started on port: " + process.env.SERVER);
    }catch(err){
        console.error(err);
    }
});
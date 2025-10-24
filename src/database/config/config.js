const Sequelize = require('sequelize');
const {schemaCreation} = require("../../util/schema/schema");
const {UserMaster} = require("../model/userMaster/userMaster");

// Config
const sequelize = new Sequelize(process.env.DB_NAME , process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
});

async function databaseInitialize() {
    try{
        await schemaCreation(sequelize , 'auth');
        await UserMaster(sequelize);
        await sequelize.sync({force:true});

    }catch(err){
        console.error("Error! while initializing the database" , err);
    }
}

databaseInitialize();


// Testing the connection
async function testConnection() {
    try{
        await sequelize.authenticate();
        console.log('Connected! to the database');
    }catch (e) {
        console.error("Error! while connecting to the database" , e);
    }
}

testConnection();




module.exports = sequelize;
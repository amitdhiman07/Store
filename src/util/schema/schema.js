async function schemaCreation(sequelize , schemaName){
    try{
        console.log(`Creating schema ${schemaName}`);
        const newSchema = await sequelize.query(`CREATE SCHEMA IF NOT EXISTS ${schemaName}`);
        console.log(schemaName , "has been successfully created");
        return newSchema;
    }catch (e) {
        console.error(`Error! while creating S{schemaName}` ,e);
    }
}

module.exports = {schemaCreation};
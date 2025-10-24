
const {DataTypes} = require("sequelize");

async function UserMaster(sequelize) {
    return  await sequelize.define('userMaster', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        email : {
            type : DataTypes.STRING(97),
            allowNull: false,
        },
        password: {
            type : DataTypes.TEXT,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        underscored: true,
        schema: 'auth',
        tableName: 'userMaster',
    });
}

module.exports = {UserMaster};


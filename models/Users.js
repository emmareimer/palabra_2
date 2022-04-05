// import important parts of sequelize library
const { Model, DataTypes} = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Word_Of_Day = require('./WordOfDay');
const Notes = require('./Notes')

// Initialize Product model (table) by extending off Sequelize's Model class
class Users extends Model {}

// set up fields and rules for Product model
Users.init(
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Users',
  }
  );

module.exports = Users;

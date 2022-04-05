// import important parts of sequelize library
const { Model, DataTypes} = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const WordOfDay = require('./WordOfDay');
const Note = require('./Note')

// Initialize Product model (table) by extending off Sequelize's Model class
class User extends Model {}

// set up fields and rules for Product model
User.init(
  {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
    modelName: 'User',
  }
  );

module.exports = User;

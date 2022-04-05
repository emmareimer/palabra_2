// import important parts of sequelize library
const { Model, DataTypes} = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const User = require('./User');
const Note = require('./Note')

// Initialize Product model (table) by extending off Sequelize's Model class
class WordOfDay extends Model {}

// set up fields and rules for Product model
WordOfDay.init(
  {
      day: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      word: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        }
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'WordOfDay',
  }
  );

module.exports = WordOfDay;

// import important parts of sequelize library
const { Model, DataTypes} = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const WordOfDay = require('./WordOfDay')
const User = require('./User');


// Initialize Note model (table) by extending off Sequelize's Model class
class Note extends Model {}

// set up fields and rules for Note model
Note.init(
  {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      note_of_day: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        }
      },
      day: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "WordOfDay",
          key: "day",
        }
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Note",
  }
  );

module.exports = Note;

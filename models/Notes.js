// import important parts of sequelize library
const { Model, DataTypes} = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const WordOfDay = require('./WordOfDay')
const Users = require('./Users');


// Initialize Product model (table) by extending off Sequelize's Model class
class Notes extends Model {}

// set up fields and rules for Product model
Notes.init(
  {
      id: {
        type: DataTypes.INTEGER,
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
          model: "Users",
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
    modelName: "Notes",
  }
  );

module.exports = Notes;

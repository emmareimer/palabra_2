// import important parts of sequelize library
const { Model, DataTypes} = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Users = require('./Users');
const Word_Of_Day = require('./Word_Of_Day')

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
      note: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      day: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Word_Of_Day',
          key: 'day',
        }
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Notes',
  }
  );

module.exports = Notes;

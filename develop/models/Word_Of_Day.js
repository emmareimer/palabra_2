// import important parts of sequelize library
const { Model, DataTypes} = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Users = require('./Users');
const Notes = require('./Notes')

// Initialize Product model (table) by extending off Sequelize's Model class
class Word_Of_Day extends Model {}

// set up fields and rules for Product model
Word_Of_Day.init(
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
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      noteId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Notes',
          key: 'id',
        }
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Word_Of_Day',
  }
  );

module.exports = Word_Of_Day;

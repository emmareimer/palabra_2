// import models
const WordOfDay = require('./WordOfDay');
const User = require('./User');
const Note = require('./Note');

// Words -> belongsTo -> user. User -> hasMany -> Words

WordOfDay.hasMany(Note, {
  foreignKey: 'day',
});

Note.belongsTo(WordOfDay, {
  foreignKey: 'day',
  });

User.hasMany(Note, {
  foreignKey: 'user_id',
});

Note.belongsTo(User, {
  foreignKey: 'user_id',
});




module.exports = {
  User,
  WordOfDay,
  Note,
};
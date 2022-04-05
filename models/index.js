// import models
const WordOfDay = require('./WordOfDay');
const User = require('./User');
const Note = require('./Note');

// Words -> belongsTo -> user. User -> hasMany -> Words
WordOfDay.belongsTo(User);

User.hasMany(WordOfDay);

WordOfDay.hasOne(Note);

Note.belongsTo(WordOfDay, {
  foreignKey: {
    name: 'note_id',
  }
});

User.hasMany(Note);

// // Note -> belongsTo -> User, 
Note.belongsTo(User, {
  foreignKey: 'user_id',
});


<<<<<<< HEAD
// User -> hasMany -> notes. 
=======


// User -> hasMany -> Note. 
>>>>>>> a4b6db2ac97e0b446177893c4c61dd4ceef8c6b6
// User.hasMany(Notes);

// Notes -> belongsTo -> Word
// Notes.belongsToMany(WordOfDay, {
//   through: 'Notes',
//   foreignKey: 'day',
// });


// Words.belongsToMany(Users, {
//     through: '',
//     foreignKey: '',
// });

// // Products belongsTo Category 
// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, { 
//   through: 'ProductTag',
//   foreignKey: 'product_id',
//    });

// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, { 
//   through: 'ProductTag',
//   foreignKey: 'tag_id', 
// });

module.exports = {
  User,
  WordOfDay,
  Note,
};
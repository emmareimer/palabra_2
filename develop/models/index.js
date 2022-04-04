// import models
const WordOfDay = require('./WordOfDay');
const Users = require('./Users');
const Notes = require('./Notes');

// Words -> belongsTo -> user. User -> hasMany -> Words
WordOfDay.belongsTo(Users);

Users.hasMany(WordOfDay);

// // Notes -> belongsTo -> Users, 
Notes.belongsToMany(Users, {
  through: 'WordOfDay',
  foreignKey: 'day',
});

Users.hasMany(Notes);


// User -> hasMany -> notes. 
// Users.hasMany(Notes);

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
  Users,
  WordOfDay,
  Notes,
};
// import models
const Words = require('./Word_Of_Day');
const Users = require('./Users');

// Words -> belongsTo -> user. User -> hasMany -> Words
Words.belongsTo(Users);

// Categories have many Products
Users.hasMany(Words);

// Notes -> belongsTo -> User. User -> hasMany -> notes. Notes -> belongsTo -> Word


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
  Words,
};
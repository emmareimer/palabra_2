// import models
const words = require('./words');
const users = require('./users');

 
words.belongsTo(users);

// Categories have many Products
users.hasMany(words);

// words.belongsToMany(users, {
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
  users,
  words,
};
const { Users } = require('../models');

const UsersData = [
  {
    id: 1,
    email: 'emma@test.com',
    password: 'password',
  },
];

const seedUsers = () => Users.bulkCreate(UsersData);

module.exports = seedUsers;

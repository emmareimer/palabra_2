const { User } = require('../models');

const UserData = [
  {
    id: 1,
    email: 'emma@test.com',
    password: 'password',
  },
];

const seedUser = () => User.bulkCreate(UserData);

module.exports = seedUser;

//adding note

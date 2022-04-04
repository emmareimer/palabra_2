const seedNotes = require('./Notes-seeds');
const seedUsers = require('./Users-seeds');
const seedWordOfDay = require('./WordOfDay-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedNotes();
  console.log('\n----- NOTES SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedWordOfDay();
  console.log('\n----- WordOfDay SEEDED -----\n');

  process.exit(0);
};

seedAll();

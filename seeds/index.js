<<<<<<< HEAD
const seedNotes = require('./Note-seeds');
const seedUsers = require('./User-seeds');
=======
const seedNote = require('./Note-seeds');
const seedUser = require('./User-seeds');
>>>>>>> a4b6db2ac97e0b446177893c4c61dd4ceef8c6b6
const seedWordOfDay = require('./WordOfDay-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedWordOfDay();
  console.log('\n----- WordOfDay SEEDED -----\n');

  await seedNote();
  console.log('\n----- NOTES SEEDED -----\n');

  process.exit(0);
};

seedAll();

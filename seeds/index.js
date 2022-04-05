const seedNote = require('./Note-seeds');
const seedUser = require('./User-seeds');
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

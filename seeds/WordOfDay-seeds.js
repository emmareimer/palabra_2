const { WordOfDay } = require('../models');

const WordOfDayData = [
  {
    day: 001,
    word: 'happy',
    user_id: 1,
  },
];

const seedWordOfDay = () => WordOfDay.bulkCreate(WordOfDayData);

module.exports = seedWordOfDay;

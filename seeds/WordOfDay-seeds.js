const { WordOfDay } = require('../models');

const WordOfDayData = [
  {
    day: 001,
    word: 'happy',
  },
];

const seedWordOfDay = () => WordOfDay.bulkCreate(WordOfDayData);

module.exports = seedWordOfDay;

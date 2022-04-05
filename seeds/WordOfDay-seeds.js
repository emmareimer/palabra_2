const { WordOfDay } = require('../models');

const WordOfDayData = [
  {
    day: 1,
    word: 'happy',
    user_id: 1,
  },
];

const seedWordOfDay = () => WordOfDay.bulkCreate(WordOfDayData);

module.exports = seedWordOfDay;

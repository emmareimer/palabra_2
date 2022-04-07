const { WordOfDay } = require('../models');

const WordOfDayData = [
  {
    day: 001,
    word: 'happy',
  },
  {
    day: 091,
    word: 'sad',
  },
  {
    day: 092,
    word: 'excited',
  },
  {
    day: 093,
    word: 'moody',
  },
  {
    day: 094,
    word: 'salty',
  },
  {
    day: 095,
    word: 'grumpy',
  },
  {
    day: 096,
    word: 'dope',
  },
  {
    day: 097,
    word: 'sleepy',
  },
  {
    day: 098,
    word: 'mad',
  },
];

const seedWordOfDay = () => WordOfDay.bulkCreate(WordOfDayData);

module.exports = seedWordOfDay;

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
  {
    day: 099,
    word: 'genuine',
  },
  {
    day: 100,
    word: 'crazy',
  },
  {
    day: 101,
    word: 'terrible',
  },
  {
    day: 102,
    word: 'console',
  },
  {
    day: 103,
    word: 'bug',
  },
  {
    day: 104,
    word: 'coffee',
  },
];

const seedWordOfDay = () => WordOfDay.bulkCreate(WordOfDayData);

module.exports = seedWordOfDay;

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
    word: 'grift',
  },
  {
    day: 093,
    word: 'mettlesome',
  },
  {
    day: 094,
    word: 'construe',
  },
  {
    day: 095,
    word: 'prosaic',
  },
  {
    day: 096,
    word: 'slough',
  },
  {
    day: 097,
    word: 'kitsch',
  },
  {
    day: 098,
    word: 'rejuvenate',
  },
  {
    day: 099,
    word: 'captious',
  },
  {
    day: 100,
    word: 'patron',
  },
  {
    day: 101,
    word: 'palindrome',
  },
  {
    day: 102,
    word: 'rankle',
  },
  {
    day: 103,
    word: 'nerd',
  },
  {
    day: 104,
    word: 'affable',
  },
  {
    day: 105,
    word: 'sanguine',
  },
  {
    day: 106,
    word: 'winsome',
  },
  {
    day: 107,
    word: 'meritorious',
  },
  {
    day: 108,
    word: 'finesse',
  },
  {
    day: 109,
    word: 'stola',
  },
  {
    day: 110,
    word: 'juggernaut',
  },
  {
    day: 111,
    word: 'factoid',
  },
  {
    day: 112,
    word: 'homogeneous',
  },
  {
    day: 113,
    word: 'intemperate',
  },
  {
    day: 114,
    word: 'opine',
  },
  {
    day: 115,
    word: 'sully',
  },
  {
    day: 116,
    word: 'voluble',
  },
  {
    day: 117,
    word: 'antithetical',
  },
  {
    day: 118,
    word: 'galvanize',
  },
  {
    day: 119,
    word: 'interloper',
  },
  {
    day: 120,
    word: 'smarmy',
  },
  {
    day: 121,
    word: 'milquetoast',
  },
  {
    day: 122,
    word: 'palisade',
  },
  {
    day: 123,
    word: 'ostracize',
  },
];

const seedWordOfDay = () => WordOfDay.bulkCreate(WordOfDayData);

module.exports = seedWordOfDay;

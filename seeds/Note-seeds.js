const { Note } = require('../models');

const NoteData = [
  {
    id: 1,
    note_of_day: "This word is really cool.",
    user_id: 1,
    day: 1,
  },
];

const seedNote = () => Note.bulkCreate(NoteData);

module.exports = seedNote;

// checking something

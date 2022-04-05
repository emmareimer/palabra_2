const { Notes } = require('../models');

const NotesData = [
  {
    id: 1,
    note_of_day: "This word is really cool.",
    user_id: 1,
    day: 1,
  },
];

const seedNotes = () => Notes.bulkCreate(NotesData);

module.exports = seedNotes;

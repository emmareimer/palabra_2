const router = require('express').Router();
const { User, Note, WordOfDay } = require('../../models'); // need to update to our models *************


// GET all notes - for testing only, to be deleted before prod
router.get('/', async (req, res) => {
    try {
      const noteData = await note.findAll();
      res.status(200).json(noteData);  
    } catch (err) {
      res.status(500).json(err);
    }
  });


// CREATE a note
router.post('/', async (req, res) => {
    const userInput = 'abc Note';
    try {
      const noteData = await Note.create(userInput);
      res.status(200).json(noteData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  module.exports = router;

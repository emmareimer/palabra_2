const router = require('express').Router();
const { User, Note, WordOfDay } = require('../../models'); // need to update to our models *************

//current route /api/notes

// GET all notes - for testing only, to be deleted before prod
router.get('/', async (req, res) => {
    try {
      const noteData = await Note.findAll();
      res.status(200).json(noteData);  
    } catch (err) {
      res.status(500).json(err);
    }
  });

 
router.get('/:id', async (req, res) => {
  // const curDay = somehow we get the julian day
  try {
    const curDay = req.params.id;
    const noteData = await Note.findByPk(curDay, {
  });
  if (!noteData) {
    res.status(404).json({ message: 'No notes for this word!' });
    return;
  }
  res.status(200).json(noteData);
  } catch (err) {
    res.status(500).json(err);
  }
})


// CREATE a note
router.post('/', async (req, res) => {
    try {
      const noteData = await Note.create(req.body);
      res.status(200).json(noteData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  module.exports = router;

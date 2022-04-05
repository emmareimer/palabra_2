const router = require('express').Router();
const { User, Trip, Location } = require('../../models'); // need to update to our models *************


router.get('/', async (req, res) => {
    const noteData = await Note.findAll();
    res.status(200).json(noteData)
})


// CREATE a Note (adding column to table with value passed in from user)
router.post('/', async (req, res) => {
    try {
      const noteData = await Word.create(req.body);
      res.status(200).json(wordData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;
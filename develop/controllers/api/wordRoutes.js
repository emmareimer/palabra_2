const router = require('express').Router();
const { Word} = require('../../models'); // update


// current route:   http://localhost:3001/api/word

// GET all Words - for testing only - to be removed for prod
router.get('/', async (req, res) => {
  try {
    const wordData = await Word.findAll();
    res.status(200).json(wordData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single Word for WOD use
router.get('/:id', async (req, res) => {
    // const curDay = somehow we get the julian day
    const curDay = 1;
  try {
    const wordData = await Word.findByPk(curDay, {
      // JOIN with User, using the Trip through table
    //   include: [{ model: User, through: Trip, as: 'Word_user' }]

    });

    if (!wordData) {
      res.status(404).json({ message: 'No Word for this day!' });
      return;
    }

    res.status(200).json(wordData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a Word - for ttesting only- to be removed for prod (change to remove notes?)
router.delete('/:id', async (req, res) => {
  try {
    const wordData = await Word.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!wordData) {
      res.status(404).json({ message: 'No Word found with this id!' });
      return;
    }

    res.status(200).json(wordData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

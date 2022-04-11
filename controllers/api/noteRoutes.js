const withAuth = require('../../utils/auth')
const router = require('express').Router();
const { User, Note, WordOfDay } = require('../../models'); // need to update to our models *************

//current route /api/notes

// GET notes for current user
router.get('/', async (req, res) => {
    try {
      const noteData = await Note.findAll({
        where: {
          user_id: req.session.user_id
        }
      });
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
});


// CREATE a note
router.post('/', async (req, res) => {
    try {
      const note = req.body.note_of_day;
      const user = req.session.user_id;
      const day = req.body.day;
      const noteData = await Note.create({ note_of_day: `${note}`, user_id: `${user}`, day: `${day}` });
      res.status(200).json(noteData);
      res.render('profile')
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // router.post('/', withAuth, async (req, res) => {
  //   try {
  //     console.log(req.body)
  //     const currentDay = await WordOfDay.findAll({where: {day: WordOfDay.day}})
  //     const newNote = await Note.create({
  //       ...req.body,
  //       user_id: req.session.user_id,
  //       day: currentDay,
  //     });

  //     res.status(200).json(newNote);
  //     // res.render('profile');
  //   } catch (err) {
  //     res.status(400).json(err);
  //   }
  // });


  module.exports = router;

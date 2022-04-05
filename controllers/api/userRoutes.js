const router = require('express').Router();
const { User, Note, WordOfDay } = require('../../models'); // need to update to our models *************

// GET all users - for testing only, to be deleted before prod
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);  
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single user - not needed unless for auth reasons?
router.get('/:id', async (req, res) => {
// need to add grabbing userID from current logged in user = can use with auth??
  const userID = 1;
  try {
    const userData = await User.findByPk(req.params.id, {
      // JOIN with locations, using the Trip through table
      // include: [{ model: Location, through: Trip, as: 'planned_trips' }]
    });

    if (!userData) {
      res.status(404).json({ message: 'No User found with this id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a user - Will we need this? *******************************8
// router.delete('/:id', async (req, res) => {
//   try {
//     const userData = await User.destroy({
//       where: {
//         id: req.params.id
//       }
//     });

//     if (!userData) {
//       res.status(404).json({ message: 'No User found with this id!' });
//       return;
//     }

//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;

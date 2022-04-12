const router = require('express').Router();
const { User, Note, WordOfDay } = require('../../models'); // need to update to our models *************
// const bcrypt = require("bcryptjs")

//current route /api/users

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
  try {
    const userData = await User.findByPk(req.params.id, {
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

// POST: /api/users
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.redirect('/profile');
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        req.session.error = 'Incorrect username or password';
        res.redirect('/login')
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        res.redirect('/login');
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.user_email = userData.email;
      req.session.logged_in = true;
      
      res.redirect('/profile')
    });

  } catch (err) {
    console.log('here', err)
    res.status(400).json(err);
  }
});

module.exports = router;

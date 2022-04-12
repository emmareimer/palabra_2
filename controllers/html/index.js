const withAuth = require('../../utils/auth')
const router = require('express').Router();
const User = require('../../models/User')

// Login Page
router.get('/login', (req, res) => {
    res.render('login');
});

// Register Page
router.get('/register', (req, res) => {
  res.render('register');
});

// Testimonial page
router.get('/testimonials', (req, res) => {
  res.render('testimonials');
});

// Profile Page
router.get('/profile', withAuth, async (req, res) => {
    try {
        const user =  await User.findOne({where: {id: req.session.user_id}})
        res.render('profile', {
            user, isLoggedIn : true
        });
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});

// Home Page 
router.get('/', (req, res) => {
    const isLoggedIn = req.session.logged_in || false;
    res.render('home', {isLoggedIn});
});

// Logout - Back to Home
router.get('/logout', (req, res) => {
    if (req.session) {
      req.session.destroy(err => {
        if (err) {
          res.status(400).send('Unable to log out')
        } else {
            res.redirect('/')
        }
      });
    } else {
      res.redirect('/')
    }
  })

module.exports = router;
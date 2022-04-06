const withAuth = require('../../utils/auth')
const router = require('express').Router();
const User = require('../../models/User')

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        const user =  await User.findOne({where: {id: req.session.user_id}})
        res.render('profile', {
            user
        });
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});

router.get('/', (req, res) => {
    const isLoggedIn = req.session.logged_in || false;
    res.render('home', {isLoggedIn});
});

// TODO EMMA: Build past route handlebar /profile/word/{:ID}


// TODO!!!!! WHY YOU NO WORK !!!!!!
// Logout route
// DELETE /api/auth/logout
router.delete('/logout', (req, res) => {
    if (req.session) {
      req.session.destroy(err => {
        if (err) {
          res.status(400).send('Unable to log out')
        } else {
            res.redirect('/home')
        }
      });
    } else {
      res.end()
    }
  })


module.exports = router;
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
    const isLoggedIn = req.session.logged_in || false
    res.render('home', {isLoggedIn});
});



module.exports = router;
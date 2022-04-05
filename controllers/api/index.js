const router = require('express').Router();
const userRoutes = require('./userRoutes');
const wordRoutes = require('./wordRoutes');
const noteRoutes = require('./noteRoutes');

router.use('/notes', noteRoutes)
router.use('/users', userRoutes);
router.use('/word', wordRoutes);

module.exports = router;
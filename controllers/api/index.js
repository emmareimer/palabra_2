const router = require('express').Router();
const userRoutes = require('./userRoutes');
const wordRoutes = require('./wordRoutes');
const noteRoutes = require('./noteRoutes');
const defRoutes = require('./defRoutes');
const similarRoutes = require('./similarRoutes');

router.use('/notes', noteRoutes)
router.use('/users', userRoutes);
router.use('/word', wordRoutes);
router.use('/def', defRoutes);
router.use('/sim', similarRoutes);

module.exports = router;
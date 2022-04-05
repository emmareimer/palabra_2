const router = require('express').Router();
const userRoutes = require('./userRoutes');
const wordRoutes = require('./wordRoutes');
// const tripRoutes = require('./tripRoutes'); alter if needed

// current route:    http://localhost:3001/api
router.use('/users', userRoutes);
router.use('/word', wordRoutes);
// router.use('/trips', tripRoutes); alter if needed

module.exports = router;
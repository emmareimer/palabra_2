const router = require('express').Router();
const apiRoutes = require('./api');

// current route:   http://localhost:3001/
router.use('/api', apiRoutes);

module.exports = router;
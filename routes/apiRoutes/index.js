// importing neccesary modules
const router = require('express').Router();
const noteRoutes = require('./noteRoutes');

router.use(noteRoutes);

// specifying module export
module.exports = router;
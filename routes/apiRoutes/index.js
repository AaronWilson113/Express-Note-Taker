// requiring modules
const router = require('express').Router();
const noteRoutes = require('./noteRoutes');

// setting up route to use noteRoutes module
router.use(noteRoutes);

// exporting router module
module.exports = router;
// importing neccesary modules
const router = require('express').Router();
const path = require('path');

// route to retrieve landing html file and render it to the page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// route to retrieve notes html file and render it to the page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

module.exports = router;
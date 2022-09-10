// importing required module.
const router = require('express').Router();
const path = require('path');

// get route for our notes.html page to render it to the page. 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
});

// get route for out landing page to render it to the page
router.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../../public/index.html'));
});  

module.exports = router;
// requiring modules 
const router = require('express').Router();
const fs = require('fs');
const { createNewNote, deleteNote} = require('../../lib/noteFunctions')
const notes = require('../../db/db.json');


router.get('/notes', (req, res) => {
    let results = notes;

    console.log("Result: " +JSON.stringify(results));

    res.json(results.db.json);
});

router.post('/notes', (req, res) => {
    req.body.id = notes['notes_db'].length +1;

    const newNotes = createNewNote(req.body, notes);

    res.json(newNotes);
    
});

// exporting module 
module.exports = router;
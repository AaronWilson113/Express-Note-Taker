// requiring modules 
const router = require('express').Router();
const fs = require('fs');
const { createNewNote, deleteNote} = require('../../lib/noteFunctions')
const notes = require('../../db/db.json');

router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
});


router.get('/notes', (req, res) => {
    let note = notes;

    res.json(note)
});


router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    let note = createNewNote(req.body, notes);

    res.json(note);
    
});

// exporting module 
module.exports = router;
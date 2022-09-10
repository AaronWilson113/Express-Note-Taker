// requiring npm modules
const express = require('express');
const path = require('path');
const fs = require('fs');

// setting up server with express
const app = express();
const PORT = 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// get route for our notes.html page to render it to the page. 
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// get route for out landing page to render it to the page
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/index.html'));
});   

// requiring modules 
const router = require('express').Router();
const notes = require('./db/db.json');

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


// setting up server to listen upon npm start
app.listen(PORT, () => {
    console.log(`App now listening`)
})
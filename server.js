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



// post route for getting notes from database
app.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;

      var notes = JSON.parse(data);

      let userNote = req.body;

      userNote.id = Math.floor(Math.random() * 5000);

      notes.push(userNote);

    fs.writeFile('./db/db.json', JSON.stringify(notes), (err, data) => {
        res.json(userNote);
    });
    }); 
  });


// setting up server to listen upon npm start
app.listen(PORT, () => {
    console.log(`App now listening`)
})
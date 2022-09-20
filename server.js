// requiring npm modules
const express = require('express');
const path = require('path');
const fs = require('fs');

// setting up server with express
const app = express();
const PORT = (process.env.PORT || 3001);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// declaring variable for html route
const htmlRoutes = require('./routes/htmlRoutes');


// getting html route
app.use('/', htmlRoutes);


// post route for posting notes to db
app.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;

      var notePad = JSON.parse(data);

      let userNotePad = req.body;

      userNotePad.id = Math.floor(Math.random() * 5000);

      notePad.push(userNotePad);

    fs.writeFile('./db/db.json', JSON.stringify(notePad), (err, data) => {
        res.json(userNotePad);
    });
    }); 
  });

  // get route for retrieving notes from db
  app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {

      if (err) throw err;
      
      var notePad = JSON.parse(data);

      res.json(notePad);
    });
  });

  // delete route for deleting routes from db 
  app.delete('/api/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
      let notePad = JSON.parse(data);
      const newNotePad = notePad.filter(note => note.id !== parseInt(req.params.id));
    
    fs.writeFile('./db/db.json', JSON.stringify(newNotePad), (err, data) => {
      res.json({msg: 'successfully'});
    });
  });
  });

// setting up server to listen upon npm start
app.listen(PORT, () => {
    console.log(`App now listening`)
})
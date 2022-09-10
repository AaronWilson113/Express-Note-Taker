// importing neccesary modules
const notes = require('../../db/db.json');
const router = require('express').Router();
const fs = require('fs');

// post route for posting notes to db
router.post('/notes', (req, res) => {
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
  router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {

      if (err) throw err;
      
      var notePad = JSON.parse(data);

      res.json(notePad);
    });
  });

  // delete route for deleting data from db 
  router.delete('/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {

      if (err) throw err;
      let notePad = JSON.parse(data);
      const newNotePad = notePad.filter(note => note.id !== parseInt(req.params.id));
    
    fs.writeFile('./db/db.json', JSON.stringify(newNotePad), (err, data) => {
      res.json({msg: 'successfully'});
    });
  });
  });


// specifying module export
module.exports = router;
// requiring modules
const path = require('path');
const fs = require('fs');
let notes_db = require('../db/notes.json');


// function to create a note using writeFileSync
function createNewNote(body){
    const note = body;
    notes_db['notes_db'].push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify(notes_db, null , 2)
    );
    return note;
};

// function to delete a note using the on top idea and writeFileSync
function deleteNote(notesArray, id) {
    let deleteID = parseInt(id);
    notesArray.splice(deleteID, 1);

    for (let i = deleteID; i < notesArray.length; i++) {
        notesArray[i].id = i.toString();
    }

    fs.writeFileSync(path.join(
        __dirname, '../db/db.json'
    ),
    JSON.stringify({
        notes: notesArray
    }, null, 2
    ))
}

module.exports = {
    createNewNote,
    deleteNote
}
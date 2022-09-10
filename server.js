// requiring npm modules
const express = require('express');
const path = require('path');
const fs = require('fs');

// setting up server with express
const app = express();
const PORT = 3001;

// declare variables for routes

const apiRoutes = require('./routes/apiRoutes');

// get routes

app.use('/api', apiRoutes);


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




// setting up server to listen upon npm start
app.listen(PORT, () => {
    console.log(`App now listening`)
})
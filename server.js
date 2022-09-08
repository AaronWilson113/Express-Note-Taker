// requiring npm modules
const express = require('express');
const path = require('path');
const fs = require('fs');

// setting up server with express
const app = express();
const PORT = 3001;

// setting up variables for routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// setting up get routes 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes)

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// setting up server to listen upon npm start
app.listen(PORT, () => {
    console.log(`App now listening`)
})
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const WEATHERMAP_API_KEY = process.env.WEATHERMAP_API_KEY;

// Setup empty JS object to act as endpoint for all routes
// Express to run server and routes

const projectData = {};
const express = require('express');

// Start up an instance of app

const app = express();

/* Dependencies */
/* Middleware*/

const bodyParser = require('body-parser');
const cors = require('cors');

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

// Initialize the main project folder

app.use(express.static('website'));

// Spin up the server
// Callback to debug

const port = 8080;

const server = app.listen(port, ()=>{
    console.log(`listening on port: ${port}`);
});

// Initialize all route with a callback function



// Callback function to complete GET '/all'



// Post Route
  

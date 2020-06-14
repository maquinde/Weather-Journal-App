// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8080;
const server = app.listen(port, listening);

function listening(){
    console.log(`Server on localhost:${port}`);
}

// Initialize '/all' route with a callback function
app.get('/all', sendData);

// Callback function to complete GET '/all'
function sendData(req, res){
    res.send(projectData);
}

// Post Route
app.post('/', (req, res) => {
    projectData.temp = req.body.main.temp;
    projectData.date = req.body.date;
    projectData.feeling = req.body.feeling;
    console.log('POST Received!');
    res.end();
});

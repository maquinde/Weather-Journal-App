// Setup empty JS object to act as endpoint for all routes
const projectData = {};


// Express to run server and routes
const express = require('express');


// Start up an instance of app
const app = express();


/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));



// Spin up the server
const port = 8080;
const server = app.listen(port, ()=>{
    console.log(`listening on port: ${port}`);
});


// Initialize all route with a callback function
// Callback function to complete GET '/all'
app.get('/all', (req, res) => {
    res.send(projectData);
});


// Post Route
const data = [];
app.post('/all', weatherInfo);  

function weatherInfo(req, res){
    projectData.date = req.body.date;
    projectData.temp = req.body.temp;
    projectData.content = req.body.content;
    res.send(projectData);
}
// Personal API Key for OpenWeatherMap API
const url = "https://api.openweathermap.org/data/2.5/weather?";
const key = "edf4166a8c76354d02d7cebedd3be30d";
const urlBuild = `${url}zip=${zipCode}&appid=${key}`;


//Get the date
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();


// Event listener to add function to existing HTML DOM element
const button = document.getElementById('generate');
button.addEventListener('click', execute);


/* Function called by event listener */
function execute(event){
    event.preventDefault();
    const zipCode = document.getElementById('zip').value;
    const feels = document.getElementById('feelings').value;
}


/* Function to GET Web API Data*/




/* Function to POST data */




/* Function to GET Project Data */

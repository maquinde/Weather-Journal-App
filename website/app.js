/* Global Variables */
// Personal API Key for OpenWeatherMap API
const url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=edf4166a8c76354d02d7cebedd3be30d';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



/* Function called by event listener */
const getData = async () => {
    const zip = document.querySelector('#zip').value;
    const feeling = document.querySelector('#feelings').value;
    const weatherData = await fetch(`${url}${zip}${apiKey}`);

    try {
        const weatherData_json = await weatherData.json();
        weatherData_json.feeling = feeling;
        weatherData_json.date = newDate;



    } catch(error){
        console.log('error', error);
    }
}











// Event listener to add function to existing HTML DOM element
document.querySelector('#generate').addEventListener('click', getData);


//========================COMMENT ONLY====================

/* Function to GET Web API Data*/

/* Function to POST data */

/* Function to GET Project Data */
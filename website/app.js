/* Global Variables */
// Personal API Key for OpenWeatherMap API
const url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=edf4166a8c76354d02d7cebedd3be30d';


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


/* Function to GET Project Data */
const getJson = async (url = '') => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};


/* Function to POST data */
const postWeather = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data)
        });
};


/* Function to update the data in HTML */
const updateWeather = async () => {
    const projectData = await getJson('/all');
    document.getElementById('date').innerHTML = `DATE: ${projectData.date}`;
    document.getElementById('temp').innerHTML = `TEMP: ${projectData.temp}`;
    document.getElementById('content').innerHTML = `FEELING: ${projectData.feeling}`;
};


/* Function called by event listener */
/* Function to GET Web API Data*/
const getWeather = async () => {
    const zip = document.querySelector('#zip').value;
    const feeling = document.querySelector('#feelings').value;
    const res = await fetch(`${url}${zip}${apiKey}`);

    try {
        const weatherData = await res.json();
        weatherData.feeling = feeling;
        weatherData.date = newDate;

        await postWeather('/', weatherData);
        updateWeather();

    } catch(error){
        console.log('error', error);
    }
}


// Event listener to add function to existing HTML DOM element
document.querySelector('#generate').addEventListener('click', getWeather);
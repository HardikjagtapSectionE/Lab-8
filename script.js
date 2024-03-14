// API key for accessing OpenWeatherMap API
const apiKey = 'a793bb1e6073c7f0d900bed9accb2a74';

// Function to fetch weather data
function getWeather() {
    // Prompt the user to enter the city name
    const city = prompt('Enter city name:');

    // Construct the API URL with the city name and API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch weather data from the API
    fetch(apiUrl)
    .then(response => response.json()) // Convert response to JSON format
    
    .then(data => {
        // Extract weather information from the fetched data
        const weatherInfo = `
            <p>City: ${data.name}</p>
            <p>Temperature: ${data.main.temp} &deg;C</p>
            <p>Description: ${data.weather[0].description}</p>
        `;
        
        // Display weather information on the webpage
        document.getElementById('weather-info').innerHTML = weatherInfo;
    })
    .catch(error => {
        // Handle errors if fetching weather data fails
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-info').innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
    });
}

document.getElementById('getWeather').addEventListener('click', async function() {
    const city = document.getElementById('city').value;
    const apiKey = '2dd1311b9f0c41c7b7c155348240606'; // Replace with your WeatherAPI key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.error) {
            throw new Error(data.error.message);
        }

        // Display the weather data
        document.getElementById('cityName').innerText = `City: ${data.location.name}`;
        document.getElementById('description').innerText = `Condition: ${data.current.condition.text}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.current.temp_c}°C`;
        document.getElementById('humidity').innerText = `Humidity: ${data.current.humidity}%`;
        document.getElementById('wind').innerText = `Wind Speed: ${data.current.wind_kph} kph`;
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        document.getElementById('cityName').innerText = 'Error';
        document.getElementById('description').innerText = error.message;
        document.getElementById('temperature').innerText = '';
        document.getElementById('humidity').innerText = '';
        document.getElementById('wind').innerText = '';
    }
});

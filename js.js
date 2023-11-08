/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')

/**TOP BAR */
<script>
    function updateDateTime() {
        const dateTimeElement = document.querySelector('.date-time');
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
        const formattedDate = now.toLocaleDateString('en-US', options);
        dateTimeElement.textContent = formattedDate;
    }

    // Call the function to update the date and time periodically (every second)
    setInterval(updateDateTime, 1000);
</script>

<script>
    async function getWeather() {
        const weatherElement = document.querySelector('.weather');
        const apiKey = 'YOUR_API_KEY';
        const city = 'YourCity';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;
            weatherElement.textContent = `Weather: ${temperature}°C, ${weatherDescription}`;
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    // Call the function to fetch weather data when the page loads
    getWeather();
</script>
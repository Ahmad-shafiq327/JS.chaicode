const apiKey = "YOUR_API_KEY"; // Replace this with your OpenWeatherMap API key

const bodyy = document.getElementById("body")


async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");
  bodyy.style.backgroundColor = "yellow"

  if (city === "") {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      resultDiv.innerHTML = "City not found.";
    } else {
      resultDiv.innerHTML = `
        <strong>${data.name}</strong><br>
        ${data.weather[0].main} - ${data.weather[0].description}<br>
        🌡️ Temp: ${data.main.temp} °C<br>
        💨 Wind: ${data.wind.speed} m/s
      `;
    }
  } catch (error) {
    resultDiv.innerHTML = "Error fetching weather.";
  }
}

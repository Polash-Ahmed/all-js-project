// html code
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wheather App</title>
</head>
<body>

  <h1>Weather App</h1>
  <input id="cityInput" type="text"id="" placeholder="Enter City...">
  <button type="submit"  onClick="getWeather()">Get Weather</button>
  <div id="weatherInfo"></div>
  <script src="script.js"></script>
</body>
</html>
// js code
const getWeather = ()=>{
const city = document.getElementById('cityInput').value
const apiKey = 'fb4ac0dc1f4e461b052c750dcf656f21'
 const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
 fetch(apiUrl)
 .then(res => res.json())
 .then(data=>{
  const weatherInfo = document.getElementById('weatherInfo')
  const description = data.weather[0].description
  const temperature = data.main.temp;
  const humidity = data.main.humidity
  const windSpeed = data.wind.speed
  weatherInfo.innerHTML = `
  <p>Description: ${description}</p>
  <h4>Temperture: ${temperature} &#8451</h4>
  <p>Humidity: ${humidity}%</p>
  <p>WindSpeed: ${windSpeed}m/s</p>
  `
 })
 .catch(error=>{
  console.error('Opps!, Sorry',error)
  const errInfo = document.getElementById('weatherInfo')
  errInfo.textContent = 'City not found'
 })
}

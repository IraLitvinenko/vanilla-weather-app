function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  description.innerHTML = response.data.condition.description;
  humidity.innerHTML = response.data.temperature.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
}

let key = "9f2d08e1b0a2b404obtc42f746b3b9a3";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=London&key=${key}`;
axios.get(apiUrl).then(displayTemperature);

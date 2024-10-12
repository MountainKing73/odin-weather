import "./style.css";
import { Weather } from "./weather";

async function getWeather(location) {
  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        location +
        "?key=HL843BFGCLKD2CDC3Z75CSGHM",
      { mode: "cors" },
    );
    const weatherData = await response.json();
    console.log("returning weather2");
    return weatherData;
  } catch (error) {
    console.log("Error retrieving weather data: " + error);
  }
}

async function searchWeather() {
  const locInput = document.querySelector("#search");
  const weatherData = await getWeather(locInput.value);
  const weather = new Weather(weatherData);
  console.log(weather);

  const locDisp = document.querySelector("#loc");
  locDisp.innerText = "Current Weather for " + weather.location;

  const tempDisp = document.querySelector("#temp");
  tempDisp.innerText = "Temperature: " + weather.temperature;

  const humidityDisp = document.querySelector("#humidity");
  humidityDisp.innerText = "Humidity: " + weather.humidity;

  const windDisp = document.querySelector("#windspeed");
  windDisp.innerText = "Windspeed: " + weather.windspeed;
}

const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", searchWeather);

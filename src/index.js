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

const weatherData = await getWeather("45431");
console.log("Weather: ");
console.log(weatherData);
const weather = new Weather(weatherData);
console.log(weather);

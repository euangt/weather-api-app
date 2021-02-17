// import { getWeather } from "./open_weather_api";

let citySearch = "llansantffraid";
const apiKey = "afc90228063b781d61606d501901d55c";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&appid=${apiKey}`;
const weatherCard = document.querySelector("#open-weather-card");

const getWeather = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let city = citySearch;
      let mainWeather = data.weather[0].main;
      let weatherDescription = data.weather[0].description;
      let temperature = data.main.temp;
      // console.log(data);
      weatherCard.insertAdjacentHTML(
        "beforeend",
        `<h2>${city}</h2>
      <p>Overview: ${mainWeather}</p>
      <p>Description: ${weatherDescription}</p>
      <p>Temperature: ${temperature}</p>
      `
      );
    });
};

getWeather();

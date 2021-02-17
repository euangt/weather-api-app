// import { getWeather } from "./open_weather_api";

let citySearch = "llansantffraid";
const apiKey = "afc90228063b781d61606d501901d55c";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}`;

const getWeather = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let city = citySearch;
      let mainWeather = data.weather[0].main;
      let weather = data.weather[0].description;
      console.log(data);
    });
};

getWeather();

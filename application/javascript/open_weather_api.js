let city = "llansantffraid";
const apiKey = "afc90228063b781d61606d501901d55c";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

const getWeather = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

export { getWeather };

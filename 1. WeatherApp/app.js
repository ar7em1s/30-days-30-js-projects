import { apiKey, apiUrl } from "./apikeys.js"; //API key and API url

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";

  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "img/clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "img/clear.png";
      break;
    case "Rain":
      weatherIcon.src = "img/rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "img/drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "img/mist.png";
      break;
    case "Snow":
      weatherIcon.src = "img/snow.png";
      break;
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

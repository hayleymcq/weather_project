function updateTodayTemp(response) {
  let todayTemp = document.querySelector(".main_temp");
  let temperature = response.data.temperature.current;
  todayTemp.innerHTML = Math.round(temperature);
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.condition.description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = `${Math.round(response.data.wind.speed * 10) / 10}km/h`;
  let date = new Date(response.data.time * 1000);
  let time = document.querySelector("#time");
  time.innerHTML = formatDate(date);
  let icon = document.querySelector("#icon");
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}

function formatDate(date) {
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hour}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "cdo60b4f4t3a9a806fbe5b8a3494aa91";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateTodayTemp);
}

function citySearchResult(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector("#search-form-input");
  searchCity(searchFormInput.value);
}

let changeCity = document.querySelector(".search-form");
changeCity.addEventListener("submit", citySearchResult);

searchCity("Sydney");

let date = new Date();
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
let hour = date.getHours();
let minute = date.getMinutes();

if (minute < 10) {
  minute = `0${minute}`;
}

let todaysDate = document.querySelector(".todays-date");

todaysDate.innerHTML = `${day} ${hour}:${minute}`;

function updateTodayTemp(response) {
  let todayTemp = document.querySelector(".main_temp");
  let temperature = response.data.temperature.current;
  todayTemp.innerHTML = Math.round(temperature);
   let h1 = document.querySelector("h1");
    h1.innerHTML = response.data.city;
}

function searchCity(city) {
let apiKey = "cdo60b4f4t3a9a806fbe5b8a3494aa91";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(updateTodayTemp)
}

function citySearchResult(event) {
  event.preventDefault();
   let searchFormInput = document.querySelector("#search-form-input");
  searchCity(searchFormInput.value);
}

let changeCity = document.querySelector(".search-form");
changeCity.addEventListener("submit", citySearchResult);

searchCity("Sydney");







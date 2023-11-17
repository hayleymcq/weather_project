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

let h1 = document.querySelector("h1");

let changeCity = document.querySelector(".change-city");

changeCity.addEventListener("submit", displayCity);

let cityChange = document.querySelector(".search-bar");

function displayCity(event) {
  event.preventDefault();
  h1.innerHTML = `${cityChange.value}`;
}

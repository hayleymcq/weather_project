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


function citySearchResult(event) {
  event.preventDefault();
   let h1 = document.querySelector("h1");
   let searchFormInput = document.querySelector("#search-form-input");
  h1.innerHTML = searchFormInput.value;
 
}

let changeCity = document.querySelector(".search-form");
changeCity.addEventListener("submit", citySearchResult);








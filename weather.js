import {apiKey} from "./config.js";


const city = 'Uzhhorod';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

const name = document.getElementById("name");
const main = document.getElementById("main");
const temperature = document.getElementById("temperature");
const feelsLike = document.getElementById("feelsLike");


fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        name.innerHTML = data.name;
        main.innerHTML = data.weather[0].main;
        temperature.innerHTML = (data.main.temp - 273.15).toFixed(2);
        feelsLike.innerHTML = `Feels like: ${(data.main.feels_like - 273.15).toFixed(2)}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });

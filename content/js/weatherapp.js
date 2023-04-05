/* Code to fetch weather data */

const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector('form');
const search = document.querySelector('#search');
const weather = document.querySelector('#weather');

const getWeather = async (city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    showWeather(data);
};

const showWeather = (data) => {
    if (data.cod === "404") {
        weather.innerHTML = `<h2>City Not Found</h2>`;
        return;
    }
    weather.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="hello">
    <div class="weather-text ps-3">
        <h2>${data.main.temp}</h2>
        <span>${data.weather[0].main}</span>
    </div>`
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    getWeather(search.value);
})
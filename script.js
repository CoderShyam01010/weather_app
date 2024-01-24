const inputBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('#searchBtn');
const weather_img = document.querySelector('.weather-img');
const temparature = document.querySelector('.temp');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity');
const wind_speed = document.querySelector('#wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
    const api_key= "3472a5aeaf2a25d11e101d8d737b9294";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then
    (response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display="block";
        weather_body.style.display="none";
        return;
    }

    weather_body.style.display="flex";
    location_not_found.style.display="none";


    temparature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/Hr`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src="/weather_img/cloud.png";
            break;
        case 'Clear':
            weather_img.src="/weather_img/clear.png";
            break;
        case 'Mist':
            weather_img.src="weather_img/mist.png";
            break;
        case 'Rain':
            weather_img.src="weather_img/rain.png";
            break;
        case 'Snow':
            weather_img.src="weather_img/snow.png";
            break;
        case 'Haze':
            weather_img.src="weather_img/Haze.png";
            break;
        case 'Fog':
            weather_img.src="weather_img/fog.jpg";
            break;
    }
};

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});


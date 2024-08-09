let inputbox= document.querySelector(".input-box")
let searchBtn= document.querySelector("#searchBtn")
let weather_img= document.querySelector(".weather-img")
let temperature= document.querySelector(".temperature")
let description= document.querySelector(".description")
let humidity= document.querySelector("#humidity")
let wind_speed= document.querySelector("#wind-speed")
let location_not_found= document.querySelector(".location-not-found")
let weather_body=document.querySelector(".weather-body")


async function checkWeather(city){
    const api_key = "83b7b8fafcf2fa780ade0d69ae6f887a";
    const url =` https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);
        if(weather_data.cod ===`404`){
            location_not_found.style.display="flex"
            weather_body.style.display="none"
            return;
        }  location_not_found.style.display="none"
         weather_body.style.display="flex"
    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}C`
    description.innerHTML=`${weather_data.weather[0].description}`
    
    humidity.innerHTML=`${weather_data.main.humidity}%`
    wind_speed.innerHTML=`${weather_data.wind.speed}km/h`
    if(weather_data.weather[0].main=="Clouds")  {
        weather_img.src="assets/cloud.png"
    } else if (weather_data.weather[0].main=="Clear")  {
        weather_img.src="assets/clear.png"
}else if (weather_data.weather[0].main=="Rain")  {
    weather_img.src="assets/rain.png"
}else if (weather_data.weather[0].main=="Drizzle")  {
    weather_img.src="assets/snow.png"
}else if (weather_data.weather[0].main=="Mist")  {
    weather_img.src="assets/mist.png"
}
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(inputbox.value)
})
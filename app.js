// Declared variables
const cloud_pct = document.getElementById("cloud_pct")
const feels_like = document.getElementById("feels_like")
const humidity = document.getElementById("humidity")
const max_temp = document.getElementById("max_temp")
const min_temp = document.getElementById("min_temp")
const sunrise = document.getElementById("sunrise")
const sunse = document.getElementById("sunse")
const temp = document.getElementById("temp")
const wind_degrees = document.getElementById("wind_degrees")
const wind_speed = document.getElementById("wind_speed")
const input = document.getElementById("inp")
const get = document.getElementById("get")
const gg = document.getElementById("gg")
const cityN = document.getElementById("city-name")
// Fetching the api
const getWeather = (city) =>{
    gg.innerHTML = city
    cityN.innerHTML = city
    const options = {
        headers: { 'X-Api-Key': 'p2kiJ61AIZ142KUg5StweQ==vvnOqlvaOmPTET5N'}
    }
    fetch('https://api.api-ninjas.com/v1/weather?city='+ city, options)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data)
        cloud_pct.innerHTML = data.cloud_pct;
        feels_like.innerHTML = data.feels_like
        humidity.innerHTML = data.humidity
        max_temp.innerHTML = data.max_temp
        min_temp.innerHTML = data.min_temp
        sunrise.innerHTML = data.sunrise
        sunse.innerHTML = data.sunset
        temp.innerHTML = data.temp
        wind_degrees.innerHTML = data.wind_degrees
        wind_speed.innerHTML = data.wind_speed
    
    
    
    }).catch((error)=>{
        console.log("Error Occured!!")
    })
}
get.addEventListener('click',(e)=>{
    e.preventDefault()
    getWeather(input.value)

})
getWeather("Delhi")
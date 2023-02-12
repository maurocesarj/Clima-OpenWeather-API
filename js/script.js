// Var e elementos

const apiKey = "ab718853d28ca12ba78624daa9a0c3f8";
const temp1 = "http://openweathermap.org/img/wn/"
const temp2 = ".png"


const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")


// Funções

const showWeatherData = async(city) => {
    const data = await getWeatherData(city);

    cityElement.innerHTML = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerHTML = data.weather[0].description;
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`)

    humidityElement.innerHTML = `${data.main.humidity}%`
    windElement.innerHTML = `${data.wind.speed}Km/H`

    console.log(data.weather[0].icon)

}

const getWeatherData = async(city) =>{

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json();

   return data
}

// Eventos
searchBtn.addEventListener("click", (e) => {

    e.preventDefault()

    const city =cityInput.value
    showWeatherData(city)
})
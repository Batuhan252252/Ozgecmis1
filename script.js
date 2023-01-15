const url = 'https://api.openweathermap.org/data/2.5/'
const key = '0fd866e8fcb369f5e3b1503a68370af8'

const setQuery = (e) => {
    if(e.keyCode == '13')
    getResult(seachBar.value)
    console.log(cityName);
}

const getResult = (cityName) => {
    let query = '${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr'
fetch(query)
.then(weather => {
    return weather.json()
})
.then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = '${result.name}, ${result.sys.country}'

    let temp = document.querySelector('.temp')
    temp.innerText = '${Math.raund(result.main.temp)}°C'

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = '${Math.raund(result.main.temp_min)}°c /      ${Math.raund(result.main.temp_max)}°c'
}


const seachBar =document.getElementById('searchBar')
seachBar.addEventListener('keypress',setQuery)
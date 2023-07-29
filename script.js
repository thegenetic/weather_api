const api_key = "c0361b3404d4c2ea79eb226fdc31fa0e";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric";


function pickLocation(){
    var location = document.getElementById('search').value;
    var letters = /^[A-Za-z]+$/;
    if (location.match(letters)) {
        api_call(location);
    }
    else {
        alert("Please enter a valid location name");
    }
    document.getElementById('search').value = "";
}

async function api_call(x) {
    const response = await fetch(api_url + `&appid=${api_key}` + `&q=${x}`);
    var data = await response.json();
    document.getElementById('weather-condition').innerHTML= data.weather[0].main
    document.getElementById('description').innerHTML= data.weather[0].description

    if (data.weather[0].main == 'Clouds') {
        document.getElementById("myImg").src = "images/clouds.png";
    }
    if (data.weather[0].main == 'Drizzle') {
        document.getElementById("myImg").src = "images/drizzle.png";
    }
    if (data.weather[0].main == 'Gauge') {
        document.getElementById("myImg").src = "images/gauge.png";
    }
    if (data.weather[0].main == 'Humidity') {
        document.getElementById("myImg").src = "images/humidity.png";
    }
    if (data.weather[0].main == 'Mist') {
        document.getElementById("myImg").src = "images/mist.png";
    }
    if (data.weather[0].main == 'Rain') {
        document.getElementById("myImg").src = "images/rain.png";
    }
    if (data.weather[0].main == 'Snow') {
        document.getElementById("myImg").src = "images/snow.png";
    }
    if (data.weather[0].main == 'Wind') {
        document.getElementById("myImg").src = "images/wind.png";
    }

    document.getElementById('temperature').innerHTML = data.main.temp
    document.getElementById('humidity').innerHTML = data.main.humidity
    document.getElementById('pressure').innerHTML = data.main.pressure
    document.getElementById('wind').innerHTML = data.wind.speed
    document.getElementById('lat').innerHTML = data.coord.lat
    document.getElementById('long').innerHTML = data.coord.lon
    document.getElementById('city').innerHTML = data.name
    document.getElementById('location').classList.remove("hide");
    document.getElementById('additional-details').classList.remove("hide");
    document.getElementById('max_temp').innerHTML = data.main.temp_max
    document.getElementById('min_temp').innerHTML = data.main.temp_min
    document.getElementById('sea_level').innerHTML = data.main.sea_level
    document.getElementById('ground_level').innerHTML = data.main.grnd_level
    document.getElementById('feels_like').innerHTML = data.main.feels_like
    document.getElementById('visibility').innerHTML = data.visibility
    document.getElementById('wind_speed').innerHTML = data.wind.speed
    document.getElementById('wind_degree').innerHTML = data.wind.deg
    document.getElementById('country').innerHTML = data.sys.country
    document.getElementById('timezone').innerHTML = data.timezone

}



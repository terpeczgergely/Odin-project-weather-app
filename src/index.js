const defaultLocation = "Budapest"
let location = defaultLocation;
let isCelsius = true;
const key = "81dee91ab1544b219b0214517240503";

const weatherTypeElement = document.getElementById("weather-type");
const weatherLocationElement = document.getElementById("weather-location");
const weatherLocationTimeElement = document.getElementById("weather-location-time");
const weatherDegreeElement = document.getElementById("weather-degree");
const weatherDegreeDisplayElement = document.getElementById("weather-degree-display")
const weatherTypeIcon = document.getElementById("weather-type-icon");
const weatherFeelsLikePercentageElement = document.getElementById("feelslike-degree");
const weatherHumidityPercentageElement = document.getElementById("humidity-percentage");
const weatherWindDirectionElement = document.getElementById("wind-direction-value");
const weatherWindSpeedElement = document.getElementById("wind-speed-value");
const searchLocationElement = document.getElementById("search-location")
const errorElement = document.getElementById("error")
searchLocationElement.addEventListener('blur', function() {
    location = this.value

  if (validateLocation(location)) {
    errorElement.innerHTML = ""
    fetchData(location);
  } else {
    errorElement.innerHTML = "Location was not provided!"
    console.log("Failed to fetch weather, because location is missing")
  }
  
});

async function fetchData() {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (!location) {
        throw new Error('No location specified');
      }

      if (!response.ok) {
        errorElement.innerHTML = "Location was not found!"
        throw new Error('Network response was not ok');
      }
  
    const data = await response.json();
     let weatherType = data.current.condition.text;
     weatherTypeElement.innerHTML = weatherType;
     weatherLocationElement.innerHTML = `${data.location.name}, ${data.location.country}`;
     weatherLocationTimeElement.innerHTML = `${data.location.localtime}`
     if (!isCelsius){ 
        weatherDegreeElement.innerHTML = `${data.current.temp_f} F°`
        weatherDegreeDisplayElement.innerHTML = `Displaying temperature in F° <br> (click on degree to change)`
        weatherFeelsLikePercentageElement.innerHTML = `${data.current.feelslike_f} F°`
     } else {
        weatherDegreeElement.innerHTML = `${data.current.temp_c} C°`
        weatherDegreeDisplayElement.innerHTML = "Displaying temperature in C° <br> (click on degree to change)"
        weatherFeelsLikePercentageElement.innerHTML = `${data.current.feelslike_c} C°`
     }
     
     weatherTypeIcon.src = `https:${data.current.condition.icon}`
     weatherTypeIcon.alt = weatherType
     weatherHumidityPercentageElement.innerHTML = `${data.current.humidity} %`
     weatherWindDirectionElement.innerHTML = `${data.current.wind_dir} `
     weatherWindSpeedElement.innerHTML = `${data.current.wind_kph} km/h`  
      // Process the JSON data
      //console.log(data);
  
      return data; // Return the fetched data
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error; // Re-throw the error to propagate it further if needed
    }
  }

fetchData()

function validateLocation(location){
  if (!location) {
    return false
  } else return true;
}

weatherDegreeElement.addEventListener('click', ()=> {
    !isCelsius ? isCelsius = true : isCelsius = false;
    fetchData();
})


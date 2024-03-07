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

const defaultLocation = "Budapest"
let location = defaultLocation;
let isCelsius = true;
let daysToCreate = 7;
const key = "81dee91ab1544b219b0214517240503";

searchLocationElement.addEventListener('blur', function() {
    location = this.value

  if (validateLocation(location)) {
    errorElement.innerHTML = ""
    fetchData(location);
    fetchForecastData(location);
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

  async function fetchForecastData() {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=7`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      console.log(data);
      for (let i = 0; i < daysToCreate; i++) {
        const dayNameFill = document.getElementById(`dayName${i}`)
        dayNameFill.innerHTML = getDayName(data.forecast.forecastday[i].date)
        const dayMaxTempFill = document.getElementById(`dayMaxTemp${i}`)
        const dayMinTempFill = document.getElementById(`dayMinTemp${i}`)
        const dayWeatherTypeImg = document.getElementById(`dayWeatherTypeImg${i}`)
        dayWeatherTypeImg.src = `https:${data.forecast.forecastday[i].day.condition.icon}`
        dayWeatherTypeImg.alt = data.forecast.forecastday[i].day.condition.text
        if (isCelsius){
        dayMaxTempFill.innerHTML = ` ${data.forecast.forecastday[i].day.maxtemp_c} C° max `;
        dayMinTempFill.innerHTML = ` ${data.forecast.forecastday[i].day.mintemp_c} C° min `
        } else {
          dayMaxTempFill.innerHTML = ` ${data.forecast.forecastday[i].day.maxtemp_f} F° max `
          dayMinTempFill.innerHTML = ` ${data.forecast.forecastday[i].day.mintemp_f} F min `
        }
      }
      return data; // Return the fetched data
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error; // Re-throw the error to propagate it further if needed
    }
  }

fetchData()
createForacastDayElements()
fetchForecastData()

function getDayName(dateString) {
  // Create a new Date object with the provided date string
  const date = new Date(dateString);
  
  // Array of day names
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  // Get the day index (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
  const dayIndex = date.getDay();
  
  // Return the corresponding day name
  return daysOfWeek[dayIndex];
}

function validateLocation(location){
 return location ? true : false;
}

async function createForacastDayElements(){

  const weatherDataWeeklyElement = document.getElementById("weather-data-weekly")
  for(let i=0; i < daysToCreate; i++){
    const daysDiv = document.createElement('div')
    const dayName = document.createElement('h2')
    const dayMaxTemp = document.createElement('h1')
    const dayMinTemp = document.createElement('h4')
    const dayWeatherTypeImg = document.createElement('img')
    dayName.id = `dayName${i}`;
    daysDiv.id = `day${i}`;
    dayMaxTemp.id = `dayMaxTemp${i}`;
    dayMinTemp.id = `dayMinTemp${i}`;
    dayWeatherTypeImg.id =`dayWeatherTypeImg${i}`
    daysDiv.append(dayName, dayMaxTemp, dayMinTemp,dayWeatherTypeImg);
    weatherDataWeeklyElement.appendChild(daysDiv)
  }
}

weatherDegreeElement.addEventListener('click', ()=> {
    !isCelsius ? isCelsius = true : isCelsius = false;
    fetchData();
    fetchForecastData();                                                                     
})


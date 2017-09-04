import React from 'react'

const WeatherInfo = ({weather}) => {
  return(
    <div className="weather-info-container">
      <div className="weather-info-content">
        <p className="weather-info-details"> {weather?"Currently "+ weather.currently.summary:null}</p>
        <p className="weather-info-details"> {weather?weather.hourly.summary:null}</p>
      </div>
      <div className="weather-info-content">
        <p className="weather-info-details"> {weather?"Temp: "+ weather.currently.apparentTemperature+"°":null}</p>
        <p className="weather-info-details"> {weather?"Wind Speed: "+ weather.currently.windSpeed:null}</p>
      </div>
    </div>
  )
}

export default WeatherInfo

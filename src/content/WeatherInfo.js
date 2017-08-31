import React from 'react'

const WeatherInfo = ({weather}) => {
  return(
    <div className="weather-info-container">
      <div>
        <p> {weather?"Currently "+ weather.currently.summary:null}</p>
        <p> {weather?"Later "+ weather.hourly.summary:null}</p>
      </div>
      <div>
        <p> {weather?"Temp: "+ weather.currently.apparentTemperature:null}</p>
        <p> {weather?"Wind Speed: "+ weather.currently.windSpeed:null}</p>
      </div>
    </div>
  )
}

export default WeatherInfo

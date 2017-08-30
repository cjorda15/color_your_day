import React from 'react'

const WeatherInfo = ({weather}) => {
  return(
    <div className="weather-info-container">
      <p> {weather?"Currently "+ weather.currently.summary:"loading"}</p>
      <p> {weather?"Later "+ weather.hourly.summary:"weather"}</p>
    </div>
  )
}

export default WeatherInfo

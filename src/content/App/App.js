import React, { Component } from 'react'
import TimeMachineForm from '../TimeMachineForm'
import WeatherAnimation from '../WeatherAnimation'
import WeatherMap from '../WeatherMap'
import WeatherInfo from '../WeatherInfo'
import darkSkyApiCall from '../../helper/darkSkyApiCall'
const geocoder = require('geocoder')

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      lat: 40.016457,
      lng: -105.285884
    }
  }

  componentDidMount(){
    const {lat,lng} = this.state
    this.apiCall(lat, lng)
  }

  apiCall(lat,lng,time){
    darkSkyApiCall(lat,lng,time,
                    this.props.handleUpdateWeather.bind(this),
                    this.getLocation.bind(this),
                    this.setState.bind(this)
                  )
 }

 getLocation(lat,lng){
   geocoder.reverseGeocode( lat, lng, ( err, data ) => {
    const {formatted_address} = data.results[0]
    this.props.handleLocation(formatted_address)
  });
 }

 handleBackground(){
  return  this.props.weather?
      this.props.weather.currently.icon
        :
      "clear-day"
   }

  render(){
    return(
      <div className={this.handleBackground()+ " weather app-container"}>
        <h3 className="title-greeting">
          <span id="title-char-1">c</span>
          <span id="title-char-2">o</span>
          <span id="title-char-3">l</span>
          <span id="title-char-4">o</span>
          <span id="title-char-5">r</span>
          <span id="title-word-2">your</span>
          <span id="title-word-3">day</span>
        </h3>
        <WeatherMap
          id="weather-map"
          handleApiCall={this.apiCall.bind(this)}
         />
        <p id="location-content">{this.props.location?this.props.location:null}</p>
        <WeatherInfo
          weather={this.props.weather}
         />
        <div id="central-container">
          <WeatherAnimation
            weather={this.props.weather}
           />
        </div>
        <TimeMachineForm handleCall={this.apiCall.bind(this)}/>
      </div>
    )
  }
}


export default App

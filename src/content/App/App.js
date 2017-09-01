import React, { Component } from 'react'
import TimeMachineForm from '../TimeMachineForm'
import WeatherAnimation from '../WeatherAnimation'
import WeatherMap from '../WeatherMap'
import WeatherInfo from '../WeatherInfo'
const geocoder = require('geocoder')

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading:false,
      lat: 40.016457,
      lng: -105.285884
    }
  }

  componentDidMount(){
    const {lat,lng} = this.state
    this.apiCall(lat, lng)
  }

  apiCall(lat,lng,updateInput){
    const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'
      var location;
      if(updateInput){
        geocoder.geocode(`${lat}, ${lng}`, ( err, data ) => {
          location = data.results[0].geometry.location
          fetch(`${url}/${WEATHER_API_KEY}/${location.lat},${location.lng}`)
          .then(blob => blob.json())
          .then(data => {
            this.props.handleUpdateWeather(data),
            this.getLocation(data.latitude,data.longitude)
            this.setState({loading:false})
            })
          })
        return
      }
      this.setState({lat:lat,lng:lng,loading:true})
      fetch(`${url}/${WEATHER_API_KEY}/${lat},${lng}`)
      .then(blob => blob.json())
      .then(data => {
        this.props.handleUpdateWeather(data),
        this.getLocation(data.latitude,data.longitude)
        this.setState({loading:false})
      })
      .catch(err => console.log(err))
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
        <p id="location-content" className='title-greeting'>{this.props.location?this.props.location:null}</p>
        <WeatherInfo
          weather={this.props.weather}
          />
        <div id="central-container">
          <WeatherAnimation
            shouldAnimate={!this.state.loading}
            weather={this.props.weather}
           />
        </div>
        <TimeMachineForm handleCall={this.apiCall.bind(this)}/>
      </div>
    )
  }
}


export default App

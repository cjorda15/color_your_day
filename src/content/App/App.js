import React, { Component } from 'react'
import InputLocation from '../InputLocation'
import WeatherAnimation from '../WeatherAnimation/WeatherAnimationContainer'
import WeatherMap from '../WeatherMap/WeatherMapContainer'
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
    this.apiCall("Boulder", "Colorado")
  }

  apiCall(city,state){
    this.setState({loading:true})
    geocoder.geocode(`${city}, ${state}`, ( err, data ) => {
      const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'
      const {lat,lng} = data.results[0].geometry.location
      this.setState({lat:lat,lng:lng})
      fetch(`${url}/${WEATHER_API_KEY}/${lat},${lng}`)
      .then(blob => blob.json())
      .then(data => this.props.handleData(data),
          this.setState({loading:false}))
      .catch(err => console.log(err))
  })
 }

 handleBackground(){
  return  this.props.weather?
      this.props.weather.currently.icon
        :
      ""
   }

  render(){
    return(
      <div className={this.handleBackground() +" weather app-container"}>
        <h3 className="title-greeting">
          <span id="title-char-1">c</span>
          <span id="title-char-2">o</span>
          <span id="title-char-3">l</span>
          <span id="title-char-4">o</span>
          <span id="title-char-5">r</span>
          <span id="title-word-2">your</span>
          <span id="title-word-3">day</span>
        </h3>
        <WeatherInfo weather={this.props.weather}/>

        <div id="central-container">
          <WeatherAnimation shouldAnimate={!this.state.loading}/>
        </div>
          <WeatherMap id="weather-map" lat={this.state.lat} lng={this.state.lng}/>
        <InputLocation handleCall={this.apiCall.bind(this)}/>
      </div>
    )
  }
}

export default App

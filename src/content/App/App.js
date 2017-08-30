import React, { Component } from 'react'
import InputLocation from '../InputLocation'
import WeatherAnimation from '../WeatherAnimation/WeatherAnimationContainer'
import WeatherMap from '../WeatherMap/WeatherMapContainer'
const geocoder = require('geocoder')

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading:false,///not in use
    }
  }

  componentDidMount(){
    this.apiCall("Boulder", "Colorado")
  }

  apiCall(city,state){
    geocoder.geocode(`${city}, ${state}`, ( err, data ) => {
      const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'
      const {lat,lng} = data.results[0].geometry.location
      fetch(`${url}/${WEATHER_API_KEY}/${lat},${lng}`)
      .then(blob => blob.json())
      .then(data => this.props.handleData(data))
      .catch(err => console.log(err))
  })
}

  render(){
    return(
      <div className="app-container">
        <h3>color your day</h3>
        <InputLocation handleCall={this.apiCall.bind(this)}/>
        <WeatherAnimation/>
        <WeatherMap/>
      </div>
    )
  }
}

export default App

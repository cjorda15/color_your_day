import React, { Component } from 'react'
import TimeMachineForm from '../TimeMachineForm'
import WeatherMap from '../WeatherMap'
import WeatherInfo from '../WeatherInfo'
import WeatherReport from '../WeatherReport'
import WeatherLogo from '../WeatherLogo'
import darkSkyApiCall from '../../helper/darkSkyApiCall'
import '../../helper/introAnimation.js'
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
    const {formatted_address} = data.results[2]||data.results[0]
    this.props.handleLocation(formatted_address)
  });
 }

 handleBackground(){
  return  this.props.weather?
      this.props.weather.currently.icon
        :
      'clear-day'
   }

  weeklyReport(){
  const { weather } = this.props
    if(!weather)return null
    let data = weather.daily.data.length===1?weather.hourly.data:weather.daily.data
    data = data[0].temperature?data.filter((v,i) => i%3==0) :data
    return  data.map((data,i) => {
      return (
      <WeatherReport
        icon={data.icon}
        tempertatureHourly={data.temperature}
        temperatureMin={data.temperatureMin}
        temperatureMax={data.temperatureMax}
        time={data.time}
        key={i}
        />
      )
    })
  }

  render(){
    return(
      <div className={this.handleBackground()+ ' weather app-container'}>
        <div id="intro-announcement" className="weather snow">READY</div>
       <div className="app-content-wrapper">
        <h3 className='title-greeting'>
          <span className='color-char-1'>c</span>
          <span className='color-char-2'>o</span>
          <span className='color-char-3'>l</span>
          <span className='color-char-4'>o</span>
          <span className='color-char-5'>r</span>
          <span id='title-word-2'>your</span>
          <span id='title-word-3'>day</span>
        </h3>
        <WeatherMap
          id='weather-map'
          handleApiCall={this.apiCall.bind(this)}
          />
         <p id='location-content'>{this.props.location?this.props.location:null}</p>
         <WeatherInfo
          weather={this.props.weather}
         />
         <div id='central-container'>
          {this.props.weather?
          <WeatherLogo
            icon={this.props.weather.currently.icon}
           />:null}
          {this.weeklyReport()}
         </div>
         <TimeMachineForm handleCall={this.apiCall.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default App

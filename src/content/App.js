import React, { Component } from 'react'
import InputLocation from './InputLocation'
import { connect } from 'react-redux'
import { updateWeather } from '../actions'
import WeatherAnimation from './WeatherAnimation';
const geocoder = require('geocoder')
const mapStateToProps = (state) => {
  return {
    state:state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleData: (input) => {
      dispatch(updateWeather(input))
  }
 }
}

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading:false,
    }
  }

  apiCall(city,state){
    geocoder.geocode(`${city}, ${state}`, ( err, data ) => {
      const {lat,lng} = data.results[0].geometry.location
      fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`)
      .then(blob => blob.json())
      .then(data => this.props.handleData(data))
      .catch(err => console.log(err))
  })
}

  render(){
    return(
      <div>
        <h3>color your day</h3>
        <WeatherAnimation/>
        <InputLocation handleCall={this.apiCall.bind(this)}/>
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App)

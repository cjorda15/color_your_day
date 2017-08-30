import React, { Component } from 'react'
import InputLocation from './InputLocation'
const geocoder = require('geocoder');

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading:false,
    }
  }

  apiCall(city,state){
    geocoder.geocode(`${city}, ${state}`, function ( err, data ) {
      const {lat,lng} = data.results[0].geometry.location
      fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`)
      .then(blob => blob.json())
      .then(data => console.log(data))
  })
}

  render(){
    return(
      <InputLocation handleCall={this.apiCall.bind(this)}/>
    )
  }
}

export default App

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
      console.log(data)
      console.log(API_KEY,"!!!")
      console.log("woodd")
  })
}

  render(){
    return(
      <InputLocation handleCall={this.apiCall.bind(this)}/>
    )
  }
}

export default App

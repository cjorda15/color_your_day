import React, { Component } from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

class WeatherAnimation extends Component{
  constructor(props){
    super(props)
    this.state={
      icon: "RAIN",
      color: 'blue',
      size: 100,
      animate: true
    }
  }

  updateAnimationValues(){
    if(this.props.icon){
      return this.props.icon.toUpperCase().split('')
             .map(char => char=="-"?"_":char).join('')
    }
    return "RAIN"
  }
  updateColor(){
    if(this.props.icon){
      switch(this.props.icon){
        case 'clear-day':
          return  '#f4eb42'
        case 'partly-cloudy-day':
          return  '#cfb7ff'
        case 'cloudy':
          return  '#d3f6ff'
        case 'wind':
          return  '#ffe7d3'
        case 'fog':
          return  '#d3ffdd'
        case 'partly-cloudy-night':
          return  '#86d8ae'
        case 'rain':
          return  '#3751d3'
        case 'snow':
          return  '#3751d3'
        default:
          return '#3751d3'
      }
  }
    return "#3751d3"
  }

    render(){
      this.updateAnimationValues()
      return(
        <ReactAnimatedWeather id="weather-animation"
          icon={this.updateAnimationValues()}
          color={this.updateColor()}
          size={this.state.size}
          animate={this.state.animate}
        />
      )
    }
}

export default WeatherAnimation;

import React, { Component } from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

class WeatherAnimation extends Component{
  constructor(props){
    super(props)
    this.state={
      icon: "RAIN",
      color: 'goldenrod',
      size: 252,
      animate: this.props.shouldAnimate
    }
  }

  updateAnimationValues(){
    if(this.props.weather){
      return this.props.weather.currently.icon.toUpperCase().split('')
             .map(char => char=="-"?"_":char).join('')
    }
    return "RAIN"
    }


    render(){
      this.updateAnimationValues()
      return(
        <ReactAnimatedWeather id="weather-animation"
        icon={this.updateAnimationValues()}
        color={this.state.color}
        size={this.state.size}
        animate={this.state.animate}
        />
      )
    }
}

export default WeatherAnimation;

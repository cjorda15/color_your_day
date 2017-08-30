import React, { Component } from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

class WeatherAnimation extends Component{
  constructor(props){
    super(props)
    this.state={
      icon: "RAIN",
      color: 'goldenrod',
      size: 252,
      animate: true
    }
  }
  componentWillReceiveProps(){
    console.log(this.props,"!!!!!")
  }
  ///// receives forecaest
  /// depending on it, will change icon/color
  /// should accept a dispatch that will lead to the logic

    render(){
      return(
        <ReactAnimatedWeather
        icon={this.state.icon}
        color={this.state.color}
        size={this.state.size}
        animate={this.state.animate}
        />
      )
    }
}

export default WeatherAnimation;

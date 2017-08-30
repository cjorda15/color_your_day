import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

const defaults = {
  icon: "RAIN",
  color: 'goldenrod',
  size: 252,
  animate: true
};

const WeatherAnimation = () => (
  <ReactAnimatedWeather
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
  />
);

export default WeatherAnimation;

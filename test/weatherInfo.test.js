import {shallow} from 'enzyme'
import React from 'react';
import WeatherInfo from '../src/content/WeatherInfo'
import { expect } from 'chai'


describe('WeatherInfo test', () => {
  const weather = {currently:{
                    summary:"sunny",
                    apparentTemperature:56,
                    windSpeed:22},
                   hourly:{
                    summary:"very hot"}
                  }
   const wrapper = shallow(<WeatherInfo weather={weather}/>)
  it("should render", () => {
    expect(wrapper.length, 1)
  })

  it('should have content that is dependent on props passed to it',() => {
    const content = wrapper.first(".weather-info-details").text()
    const expected = ' Currently sunny very hot Temp: 56° Wind Speed: 22'
    expect(content).equal(expected)
  })
})

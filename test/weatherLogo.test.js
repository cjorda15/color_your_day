import {shallow} from 'enzyme'
import React from 'react';
import WeatherLogo from '../src/content/WeatherLogo'
import { expect } from 'chai'

describe('WeatherLogo test', () => {
  const weather = {currently:{
                      summary:"sunny",
                      apparentTemperature:56,
                      windSpeed:22,
                      icon:"clear-day"},
                   hourly:{
                      summary:"very hot"}
                    }
  const wrapper = shallow(<WeatherLogo weather={weather} shouldAnimate={true}/>)

  it("should render", () => {
    expect(wrapper.length, 1)
  })

  it('should have a default state', () => {
    const expected = { icon: 'RAIN', color: 'blue', size: 100, animate: true }
    expect(wrapper.state()).eql(expected)
  })
})

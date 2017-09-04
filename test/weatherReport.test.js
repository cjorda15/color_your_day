import {shallow} from 'enzyme'
import React from 'react';
import WeatherReport from '../src/content/WeatherReport'
import { expect } from 'chai'
import moment from 'moment'

describe('WeatherReport test', () => {

   const wrapper = shallow(<WeatherReport
                              icon={"clear-day"}
                              tempertatureHourly={99}
                              time={13434342}/>)

  it("should render", () => {
    expect(wrapper.length, 1)
  })

  it('should have its content given to the component through its props', () => {
    const { icon, summary, tempertatureHourly, time} = wrapper.unrendered.props
    const timeContent = wrapper.find('.weather-report-time')
    const temperatureReadingContent = wrapper.find('.daily-temperature-reading')

    expect(temperatureReadingContent.text()).equal(String(tempertatureHourly)+"°")
    expect(timeContent.text()).equal(String(moment.unix(time).format("HH:mm")))
  })

  it('should render different types of weather reports due to its props', () => {
    const wrapper2 = shallow(<WeatherReport
                               icon={"clear-day"}
                               temperatureMax={90}
                               temperatureMin={50}
                               time={13434342}/>)

     const { temperatureMax,temperatureMin } = wrapper2.unrendered.props
     const temperatureReadingContentMax = wrapper2.find('.daily-temperature-reading').first('span')
     expect(temperatureReadingContentMax.text()).equal('90°/50°')
  })

  it('should have a dynamic class dependent on props', () => {
      const wrapper3 = shallow(<WeatherReport
                                 icon={"rain"}
                                 temperatureMax={90}
                                 temperatureMin={50}
                                 time={13434342}/>)

      expect(wrapper.hasClass('clear-day')).equal(true)
      expect(wrapper3.hasClass('rain')).equal(true)
  })
})

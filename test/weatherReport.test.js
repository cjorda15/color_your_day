import {shallow,mount,render} from 'enzyme'
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

  it('should have its content given to the component through its props' , () => {
    const { icon, summary, tempertatureHourly, time} = wrapper.unrendered.props
    const timeContent = wrapper.find('.weather-report-time')
    const temperatureReadingContent = wrapper.find('.daily-temperature-reading')

    expect(temperatureReadingContent.text()).equal(String(tempertatureHourly)+"°")
    expect(timeContent.text()).equal(String(moment.unix(time).format("HH:mm")))


  })
})

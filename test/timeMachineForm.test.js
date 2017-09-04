import { shallow } from 'enzyme'
import React from 'react';
import TimeMachineForm from '../src/content/TimeMachineForm'
import { expect } from 'chai'
const mockFn  = jest.fn()


describe('WeatherAnimation test', () => {
  const wrapper = shallow(<TimeMachineForm/>)

  it("should render", () => {
    expect(wrapper.length, 1)
  })

  it('should have a default state', () => {
    expect(wrapper.state().address).equal('San Francisco, CA')
    expect(wrapper.state().showError).equal(false)
  })
})

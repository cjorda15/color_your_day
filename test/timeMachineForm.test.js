import {shallow,mount,render} from 'enzyme'
import React from 'react';
import TimeMachineForm from '../src/content/TimeMachineForm'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { expect } from 'chai'
const jest = require('jest')
describe('WeatherAnimation test', () => {
    const wrapper = shallow(<TimeMachineForm/>)

    it("should render", () => {
      expect(wrapper.length, 1)
    })

    it('should have a default state', () => {
      expect(wrapper.state().address).equal('San Francisco, CA')
      expect(wrapper.state().showError).equal(false)
    })

    it('should change its state based on date pick',() => {
      const mockFn  = jest.fn()
      const wrapper = shallow(<TimeMachineForm handleCall={mockFn}/>)

    })

  })

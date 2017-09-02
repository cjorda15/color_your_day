import {shallow,mount,render} from 'enzyme'
import React from 'react';
import TimeMachineForm from '../src/content/TimeMachineForm'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { expect } from 'chai'

describe('WeatherAnimation test', () => {
    const wrapper = shallow(<TimeMachineForm/>)
    it("should ",() => {
      console.log(wrapper,"!@#####");
    })
  })

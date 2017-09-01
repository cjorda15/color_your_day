import { expect } from 'chai'
import { updateWeather, updateLocation } from '../src/actions'

describe('actions test', () => {

 it('should update the weather', () => {
   const weather = 'sunny day around here'
   const expectedAction = {
     type: 'UPDATE_WEATHER',
     payload : 'sunny day around here'
   }
   expect(updateWeather(weather)).to.eql(expectedAction)
 })

 it('should update the location', () => {
   const weather = 'NY, NY'
   const expectedAction = {
     type: 'UPDATE_LOCATION',
     payload : 'NY, NY'
   }
   expect(updateLocation(weather)).to.eql(expectedAction)
 })


})

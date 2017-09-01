import { expect } from 'chai'
import { updateWeather, UPDATE_LOCATION } from '../src/actions'

describe('updateWeather action', () => {

 it('should update the weather', () => {
   const weather = 'sunny day around here'
   const expectedAction = {
     type: 'UPDATE_WEATHER',
     payload : 'sunny day around here'
   }
   expect(updateWeather(weather)).to.eql(expectedAction)
 })

})

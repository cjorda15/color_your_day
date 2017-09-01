import location from '../src/reducers/location'
import weather from '../src/reducers/weather'
import { expect } from 'chai'

describe('location reducer',() => {
  it('should initally return state of null', () => {
    expect(location(null,{})).equal(null)
  })

  it('should add location details', () => {
    const action ={type:"UPDATE_LOCATION", payload:"Denver,CO"}
    expect(location(null,action)).equal('Denver,CO')
  })

  it('should return the previous state with a unknown action', () => {
    const action = {type:'UNKNOWN',payload:"wow"}
    expect(location("Ny, Ny",action)).equal("Ny, Ny")
  })
})

describe('weather reducer',() => {
  it('should initally return state as null', () => {
    expect(location(null,{})).equal(null)
  })

  it('should add weather details', () => {
    const action ={type:"UPDATE_LOCATION", payload:"sunny"}
    expect(location(null,action)).equal('sunny')
  })

  it('should return the previous state with a unknown action', () => {
    const action = {type:'UNKNOWN',payload:"wow"}
    expect(location("rainy",action)).equal("rainy")
  })
})

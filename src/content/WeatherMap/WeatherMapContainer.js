import { connect } from 'react-redux'
import WeatherMap from './WeatherMap'
import { updateWeather } from '../../actions'

const mapStateToProps = (state) => {
  return {
    state:state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleData: (input) => {
      dispatch(updateWeather(input))
  }
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(WeatherMap)

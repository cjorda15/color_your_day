import { connect } from 'react-redux'
import WeatherAnimation from './WeatherAnimation'

const mapStateToProps = (state) => {
  return {
    weather:state.weather
  }
}

export default connect (mapStateToProps)(WeatherAnimation)

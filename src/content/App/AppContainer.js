import { connect } from 'react-redux'
import { updateWeather, updateLocation } from '../../actions'
import App from './App'
const mapStateToProps = (state) => {
  return {
    weather:state.weather,
    location:state.location
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateWeather: (input) => {
      dispatch(updateWeather(input))
    },
    handleLocation: (input) => {
      dispatch(updateLocation(input))
    }
 }
}

export default connect(mapStateToProps,mapDispatchToProps) (App)

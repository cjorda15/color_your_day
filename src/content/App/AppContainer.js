import { connect } from 'react-redux'
import { updateWeather } from '../../actions'
import App from './App'
const mapStateToProps = (state) => {
  return {
    weather:state.weather
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleData: (input) => {
      dispatch(updateWeather(input))
  }
 }
}

export default connect(mapStateToProps,mapDispatchToProps) (App)

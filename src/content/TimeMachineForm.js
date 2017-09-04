import React, {Component} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class TimeMachineForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      address:'San Francisco, CA',
      stateDate:moment(),
      showError:false
    }
    this.onChange = (address) => this.setState({ address })
  }

  handleChange(date) {
  this.setState({stateDate: date});
 }

  handleInput(input,type){
     this.setState({[type]:input})
  }

  handleError(){
    this.setState({showError:true})
    setTimeout(()=>{this.setState({showError:false})},2000)
  }

  handleSubmit(e){
    e.preventDefault()
    const {address,stateDate} = this.state
    const date = stateDate.utc().format().slice(0,10)
    const dateTime = Math.floor(new Date(date)/1000);

    if(!address||!stateDate){
      this.handleError()
      return
    }

    geocodeByAddress(this.state.address)
     .then(results => getLatLng(results[0]))
     .then(location => this.props.handleCall(location.lat,location.lng,dateTime))
     .catch(error => console.error('Error', error))
  }

  errorMessage(){
    if(this.state.showError){
     return <div className="error-message">error, need all input fields filled out</div>
   }
  }

  render(){
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      placeholder: 'Search Places...'
    }
    return(
      <div className="time-machine-form-container">
        <div id="time-machine-intro">
          <span className="tm-input-word" id="tm-input-word-1">Pick</span>
          <span className="tm-input-word" id="tm-input-word-3">another</span>
          <span className="tm-input-word" id="tm-input-word-4">day</span>
          <span className="tm-input-word" id="tm-input-word-5">to</span>
          <span className="color-char-1">c</span>
          <span className="color-char-2">o</span>
          <span className="color-char-3">l</span>
          <span className="color-char-4">o</span>
          <span className="color-char-5">r</span>
          <span className="tm-input-word" id="tm-input-word-6">by</span>
          <span className="tm-input-word" id="tm-input-word-8">date</span>
        </div>
        <form className="input-location-form">
         <div className="input-form-container">
          <DatePicker
            showMonthDropdown
            showYearDropdown
            placeholderText="Click to select a date"
            selected={this.state.stateDate}
            onChange={this.handleChange.bind(this)}
            />
          </div>
        <PlacesAutocomplete inputProps={inputProps} />
        <button onClick={(e)=>{this.handleSubmit(e)}}>submit</button>
       </form>
       {this.errorMessage()}
      </div>
    )
  }
}

export default TimeMachineForm

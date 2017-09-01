import React, {Component} from 'react'

class TimeMachineForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      city:"",
      state:"",
      showError:false
    }
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
    const {city,state} = this.state
    if(!city || !state){
      this.handleError()
      return
    }
    this.props.handleCall(city,state,true)
    this.setState({city:"",state:""})
  }

  errorMessage(){
    if(this.state.showError){
     return <div className="error-message">error, need city and state/country filled in</div>
   }
  }

  render(){
    return(
      <div className="time-machine-form-container">
        <div id="time-machine-intro">
          <span className="tm-input-word" id="tm-input-word-1">or</span>
          <span  id="title-char-1">c</span>
          <span  id="title-char-2">o</span>
          <span  id="title-char-3">l</span>
          <span  id="title-char-4">o</span>
          <span  id="title-char-5">r</span>
          <span className="tm-input-word" id="tm-input-word-3">by</span>
          <span className="tm-input-word" id="tm-input-word-4">week</span>
          <span className="tm-input-word" id="tm-input-word-5">with</span>
          <span className="tm-input-word" id="tm-input-word-6">list</span>
          <span className="tm-input-word" id="tm-input-word-7">of</span>
          <span className="tm-input-word" id="tm-input-word-8">categories</span>
        </div>
        <form className="input-location-form">
        <div>
          <input
            placeholder="city"
            value={this.state.city}
            onChange={(e)=>{this.handleInput(e.target.value,"city")}}
          />
          <input
            placeholder="state/country"
            value={this.state.state}
            onChange={(e)=>{this.handleInput(e.target.value,"state")}}
           />
        </div>
        <div>
          <input
            placeholder="date mm/dd/yyyy"
            type="date"
            value={this.state.date}
            onChange={(e)=>{this.handleInput(e.target.value,"date")}}
          />
        </div>
        <select onChange={(e)=>{console.log(e.target.value)}}>
          <option value="temperature">temperature</option>
          <option value="humidity">humidity</option>
          <option value="windSpeed">windSpeed</option>
          <option value="cloudCover">cloudCover</option>
        </select>
        <button onClick={(e)=>{this.handleSubmit(e)}}>submit</button>
        </form>
        {this.errorMessage()}
      </div>
    )
  }
}


export default TimeMachineForm

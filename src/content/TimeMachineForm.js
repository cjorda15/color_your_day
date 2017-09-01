import React, {Component} from 'react'
import TimeMachineInput from './TimeMachineInput'

class TimeMachineForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      city:"",
      state:"",
      interval:"",
      date:""
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
    this.props.handleCall(city,state)
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
          <span className="tm-input-word" id="tm-input-word-3">a</span>
          <span className="tm-input-word" id="tm-input-word-4">location</span>
          <span className="tm-input-word" id="tm-input-word-5">by</span>
          <span className="tm-input-word" id="tm-input-word-6">range</span>
          <span className="tm-input-word" id="tm-input-word-7">of</span>
          <span className="tm-input-word" id="tm-input-word-8">dates</span>
          <span className="tm-input-word" id="tm-input-word-9">in</span>
          <span className="tm-input-word" id="tm-input-word-10">certain</span>
          <span className="tm-input-word" id="tm-input-word-11">intervals</span>
        </div>
        <form className="input-location-form">
          <TimeMachineInput
            setsState={()=>{setState.bind(this)}}
            value={this.state.city}
            type={"city"}/>
          <TimeMachineInput
            setsState={()=>{setState.bind(this)}}
            value={this.state.state}
            type={"state"}/>
/// interval with options for by what
          <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="vw">VW</option>
          <option value="audi" selected>Audi</option>
          </select>
                  <TimeMachineInput
                    setsState={()=>{setState.bind(this)}}
                    value={this.state.date}
                type={"date"}/>
                <button onClick={(e)=>{this.handleSubmit(e)}}>submit</button>
                </form>
                {this.errorMessage()}
              </div>
            )
          }
          }


export default TimeMachineForm

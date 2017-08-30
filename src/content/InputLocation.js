import React, {Component} from 'react'

class InputLocation extends Component{
  constructor(props){
    super(props)
    this.state = {
      city:"",
      state:""
    }
  }

  handleInput(input,type){
     this.setState({[type]:input})
  }

  handleSubmit(e){
    e.preventDefault()
    //need to handle if no input or incorrect and show error
    const {city,state} = this.state
    this.props.handleCall(city,state)
  }

  render(){
    return(
      <div className="input-location-container">
        <form>
        <input
          className="input-location"
          placeholder="city"
          value={this.state.city}
          onChange={(e)=>{this.handleInput(e.target.value,"city")}}
            />
        <input
          className="input-location"
          placeholder="state"
          value={this.state.state}
          onChange={(e)=>{this.handleInput(e.target.value,"state")}}
            />
            <button onClick={(e)=>{this.handleSubmit(e)}}>submit</button>
            </form>
      </div>
    )
  }
}


export default InputLocation

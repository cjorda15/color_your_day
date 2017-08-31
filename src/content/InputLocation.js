import React, {Component} from 'react'

class InputLocation extends Component{
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
      <div className="input-location-container">
        <form className="input-location-form">
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
        <button onClick={(e)=>{this.handleSubmit(e)}}>submit</button>
        </form>
        {this.errorMessage()}
      </div>
    )
  }
}


export default InputLocation

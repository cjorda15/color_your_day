import React from 'react'

const TimeMachineInput = ({handleChange,type,value}) => {

  return(
    <input
      placeholder={type}
      value={value}
      onChange={(e)=>{handleChange(type:e.target.value)}}
     />
  )
}


export default TimeMachineInput

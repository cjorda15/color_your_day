import React from 'react'

const TimeMachineInput = ({setsState,value,type}) => {

  return(
    <input
      placeholder={type}
      value={value}
      onChange={(e)=>{setsState({type:e.target.value})}}
        />
  )
}


export default TimeMachineInput

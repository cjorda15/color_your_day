const weather = (state=null,action) => {
  switch(action.type){
    case "UPDATE_WEATHER":
     return action.payload
    default:
     return state
  }
}


export default weather

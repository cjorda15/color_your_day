export const updateWeather = (input) => {
  return {
    type:"UPDATE_WEATHER",
    payload:input
  }
}

export const updateLocation = (input) => {
  return {
    type:"UPDATE_LOCATION",
    payload:input
  }
}

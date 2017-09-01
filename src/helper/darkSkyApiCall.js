const darkSkyApiCall = (lat,lng,time,handleUpdateWeather
                        ,getLocation,setState) => {
  const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'
  const param = time? `${lat},${lng},${time}` : `${lat},${lng}`
  const query = `exclude=flags,minutely`
    setState({lat:lat,lng:lng,loading:true})
    fetch(`${url}/${WEATHER_API_KEY}/${param}?${query}`)
    .then(blob => blob.json())
    .then(data => {
      handleUpdateWeather(data),
      getLocation(data.latitude,data.longitude)
      setState({loading:false})
    })
    .catch(err => console.log(err))
}


export default darkSkyApiCall

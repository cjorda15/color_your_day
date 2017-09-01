
const darkSkyApiCall = (lat,lng,time,handleUpdateWeather
                        ,getLocation,setState) => {
                          const query = time? `${lat},${lng},${time}` : `${lat},${lng}`
                          console.log(query)
                          fetch(`api/v1/weather?query=${query}`)
                          .then(data => data.json())
                          .then(data => {
                            handleUpdateWeather(data),
                            getLocation(data.latitude,data.longitude),
                            setState({loading:false})
                           })
                          .catch(err => console.log(err,"error"))
                        }
export default darkSkyApiCall

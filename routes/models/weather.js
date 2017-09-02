const fetch = require('node-fetch');

const weather = (req, res) => {
  const param = req.query.query
  const url = 'https://api.darksky.net/forecast'
  const query = `exclude=flags,minutely`
    fetch(`${url}/${process.env.WEATHER_API_KEY}/${param}?${query}`,{
       method: 'GET'
     })
    .then(blob => blob.json())
    .then(data => { res.send(data)})
    .catch(err => console.log(err))
}

module.exports = weather

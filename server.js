const express = require('express')
const app = express()
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const port = process.env.PORT ||3000

require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/bundle', (req, res) => {
  res.sendFile(__dirname+"/build/bundle.js")
})

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname+'/public/index.html')
})

app.get('/api/v1/weather', (req, res) => {
  console.log(req.query,"!@#$@#$")
  const param = req.query.query
  const url = 'https://api.darksky.net/forecast'
  const query = `exclude=flags,minutely`
  console.log(param,"!!!")
    fetch(`${url}/${process.env.WEATHER_API_KEY}/${param}?${query}`,{
       method: 'GET'
})
    .then(blob => blob.json())
    .then(data => { res.send(data)})
    .catch(err => console.log(err))
})



app.listen(port, ()=> {
  console.log("listening on port " + port)
})

module.exports = app

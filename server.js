const express = require('express')
const app = express()
const port = process.env.PORT ||3000

app.get('/bundle', (req, res) => {
  res.sendFile(__dirname+"/build/bundle.js")
})

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname+'/public/index.html')
})

app.get('/api/v1/weather', (req, res) => {

})



app.listen(port, ()=> {
  console.log("listening on port " + port)
})

module.exports = app`

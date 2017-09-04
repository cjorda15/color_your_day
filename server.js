const express = require('express')
const app = express()
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const port = process.env.PORT ||3000
const routes = require('./routes/index.js')
require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1',routes)

app.get('/bundle', (req, res) => {
  res.sendFile(__dirname+"/build/bundle.js")
})

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname+'/public/index.html')
})

app.listen(port, ()=> {
  console.log("listening on port " + port)
})

module.exports = app

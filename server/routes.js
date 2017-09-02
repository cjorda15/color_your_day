const express = require('express')
const r = express.Router()
const user = require('./models/weather')


r.get('/weather', user.login)

module.exports = r

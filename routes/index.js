const express = require('express');
const r = express.Router();
const weather = require('./models/weather');

r.get('/weather', weather);

module.exports = r;

const hello = require('./hello.route')
const csv = require('./csv.route');
const lottery = require('./lottery.route');
const car = require('./car.route');

const express = require('express')

const app = express()

app.use('/question1', hello);
app.use('/question2', csv);
app.use('/question3', lottery);
app.use('/question6', car);

module.exports = app;
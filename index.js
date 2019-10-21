
const indexRoute = require('./route/index.route')
const express = require('express');
const bodyParser = require('body-parser');

// require('./mongoose/mongo.connect')
require('dotenv').config()

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', indexRoute)

app.listen(process.env.PORT, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log('server started at port 3000');
    }
})
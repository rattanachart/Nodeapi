
// const customer = require('../model/customer.model')
const http = require('http-status')

exports.hello = (req, res, next) => {
    console.log("Hello", req.body)
    var str = "“Hello," + req.body.name + "!”"
    res.status(200).send(str)
};

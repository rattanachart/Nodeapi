
const express = require('express');

const controllerHello = require('../controller/hello.controller')

const router = express.Router();

router.route('/hello').post(controllerHello.hello);


module.exports = router;
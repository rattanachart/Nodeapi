
const express = require('express');

const controllerCar = require('../controller/car.controller')

const router = express.Router();

router.route('/create').get(controllerCar.create);
router.route('/list').get(controllerCar.list);

module.exports = router;
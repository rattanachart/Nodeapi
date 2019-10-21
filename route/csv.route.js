
const express = require('express');

const controllerCSV = require('../controller/csv.controller')

const router = express.Router();

router.route('/read').get(controllerCSV.read);


module.exports = router;
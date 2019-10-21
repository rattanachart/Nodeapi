
const express = require('express');

const controllerLottery = require('../controller/lottery.controller')

const router = express.Router();

router.route('/lottery').post(controllerLottery.winner);


module.exports = router;
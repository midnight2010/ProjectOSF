const express = require('express');
router = express.Router();
const pay = require('../controllers/pay')
const createOrder = require('../controllers/createOrder')

router.post('/',pay)

router.post('/createOrder',createOrder)

module.exports = router;
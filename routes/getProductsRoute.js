const express = require('express');
router = express.Router();
const getProductByID = require('../controllers/getProductByID');

router.get(['/','/:productID'],getProductByID)



module.exports = router;
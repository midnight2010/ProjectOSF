const express = require('express');
router = express.Router();
const getProducts = require('../controllers/getProducts')
const getProductByID = require('../controllers/getProductByID');

router.get('/:productID',getProductByID)
router.get('/:name/:id/:productsID',getProducts)


module.exports = router;
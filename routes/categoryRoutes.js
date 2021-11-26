const express = require('express');
router = express.Router();
const itemsByCategory = require('../controllers/itemsByCategory')
const getProducts = require('../controllers/getProducts')


router.get(['/:cat','/:cat/:subcat'],itemsByCategory)
router.get('/:name/:id/:productsID',getProducts)

module.exports = router;
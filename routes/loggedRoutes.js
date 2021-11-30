const express = require('express');
router = express.Router();
const addCart = require('../controllers/addCart');
const getCart = require('../controllers/getCart');
const removeCart = require('../controllers/removeCart')
const profile = require('../controllers/profile')
const getWish = require('../controllers/getWish')
const addWish = require('../controllers/addWish')

router.get('/profile',profile)

router.get('/cart',getCart)

router.get('/wishlist',getWish)

router.post('/addWish',addWish)

router.post('/addCartItem',addCart)

router.post('/removeCartItem',removeCart)

module.exports = router;
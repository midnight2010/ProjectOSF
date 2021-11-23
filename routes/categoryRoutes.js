const express = require('express');
router = express.Router();
const itemsByCategory = require('../controllers/itemsByCategory')


router.get(['/:name','/:name/:id'],itemsByCategory)


module.exports = router;
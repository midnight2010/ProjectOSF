const express = require('express');
router = express.Router();
const authorization = require('../controllers/authorization')

router.get('/',(req,res)=> {
    res.render('signIn')
   
})

router.get('/signUp',(req,res)=> {
    res.render('signUp')
})

router.get('/signOut',(req,res) => {
    req.session.destroy();
    res.redirect('/');
})

router.post('/auth/:sign',authorization)

module.exports = router;
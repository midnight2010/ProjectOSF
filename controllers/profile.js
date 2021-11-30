const axios = require('axios')
const checkEmpty = require('../helperFunct/checkIfEmpty')

async function profile(req,res) {
  if(req.session.user){
      const cart = await checkEmpty('cart',req.session.user.secret)
      const wishlist = await checkEmpty('wishlist',req.session.user.secret)
      const orders = await checkEmpty('orders',req.session.user.secret)
     
      let lengthCart =  cart[1] == 1 ? cart[0].items.length : 0;
      let lengthWish =  wishlist[1] == 1 ? wishlist[0].items.length : 0;
      let newOrders = orders[1] == 1 ? orders[0] : 0;

      res.render('profile',{user:req.session.user,lengthCart,lengthWish,orders:newOrders})
  
 } 
 
  else {
        res.render('error',{msg:'You are not logged'})
  }
}


module.exports = profile;
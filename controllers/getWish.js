const axios = require('axios');
const getProduct = require('../helperFunct/getProduct');

function getWish(req,res) {
  if(req.session.user) {
   const getWish = async () => {
    try {
    const {data:{items}} = await axios(`${process.env.URL}/wishlist?secretKey=${process.env.SECRET_KEY}`,
                {
                    headers: { Authorization: `Bearer ${req.session.user.secret}` }
                })
   
    let products = await getProduct(items);
    let newItems=[];
    for(let i = 0; i < items.length; i++) {
        newItems.push({...items[i],...products[i]})
    }
    res.render('wish',{newItems})
   }
  catch(err) {
   res.render('cart',{newItems:[],msg:'Your cart is empty'})
  }
 }
   getWish()
}
  else {
      res.render('error',{msg:'You are not logged'})
  }
     
}





module.exports = getWish;
const axios = require('axios');
const getProduct = require('../helperFunct/getProduct');


function getCart(req,res) {
  if(req.session.user) {
    const getCart = async () => {
    try {
      const {data:{items}} = await axios(`${process.env.URL}/cart?secretKey=${process.env.SECRET_KEY}`,
                {
                    headers: { Authorization: `Bearer ${req.session.user.secret}` }
                })
  if(items) {
    let products = await getProduct(items);
    let newItems=[];
    for(let i = 0; i < items.length; i++) {
        newItems.push({...items[i],...products[i]})
    }
    res.render('cart',{newItems})
    }

    
  }
   catch(err) {
    res.render('cart',{newItems:[],msg:'Your cart is empty'})
   }
  }

   getCart()
}
   else {
    res.render('error',{msg:'You are not logged'})
   }

  
}

     






module.exports = getCart;
const axios = require('axios');

function removeCart(req,res) {
    const secretKey = process.env.SECRET_KEY;
    if(req.session.user) {
        console.log(req.body)
        const {productId,variantId} = req.body;
        axios.delete(`${process.env.URL}/cart/removeItem`,
        {
            data:{secretKey:`${secretKey}`,
            productId:`${productId}`,
            variantId:`${variantId}`} 
        },
        {
            headers: { Authorization: `Bearer ${req.session.user.secret}` }
        })
        .then(result => console.log(result))
        .catch(err => console.log(err))

    }

    else {
        res.render('error',{msg:'You are not logged'})
    }
}


module.exports = removeCart


const axios = require('axios');
const helper = require('../helperFunct/helper')
function getProducts(req,res) {
    axios(`${process.env.URL}/products/product_search?primary_category_id=${req.params.productsID}&secretKey=${process.env.SECRET_KEY}`)
     .then(result => {
        let arr = result.data[0].primary_category_id.split('-');
        let breadcrumbs = helper(arr);
        res.render('productsPage',{products:result.data,breadcrumbs})
     })
    .catch(err => res.json(err))
        
}

module.exports = getProducts;
const axios = require('axios');

function getProducts(req,res) {
   
    axios(`${process.env.URL}/products/product_search?primary_category_id=${req.params.productsID}&secretKey=${process.env.SECRET_KEY}`)
     .then(result => {
        let breadcrumbs = req.path.slice(1).split('/');
        console.log(result.data[0].id)
        res.render('productsPage',{products:result.data,breadcrumbs})
     })
    .catch(err => console.log(err))
        
}

module.exports = getProducts;
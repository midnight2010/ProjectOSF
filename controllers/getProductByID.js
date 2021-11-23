const axios = require('axios');

function getProductByID(req,res) {
    axios(`${process.env.URL}/products/product_search?id=${req.params.productID}&secretKey=${process.env.SECRET_KEY}`)
    .then(result => {
        let breadcrumbs = req.path.slice(1).split('/');
        res.render('productDescription',{product:result.data,breadcrumbs})
     })
    .catch(err => console.log(err))
}

module.exports = getProductByID;
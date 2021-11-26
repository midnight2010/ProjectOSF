const axios = require('axios');
const helper = require('../helperFunct/helper')
function getProductByID(req,res) {
    let id = req.query.search ? req.query.search : req.params.productID;
    axios(`${process.env.URL}/products/product_search?id=${id}&secretKey=${process.env.SECRET_KEY}`)
    .then(result => {
        let arr = result.data[0].primary_category_id.split('-');
        let breadcrumbs = helper(arr)
        breadcrumbs[id] = '/' + id;
        res.render('productDescription',{product:result.data,breadcrumbs,id:id})
     })
    .catch(err => console.log(err))
}

module.exports = getProductByID;
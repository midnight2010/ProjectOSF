const axios = require('axios');

function getProductByID(req,res) {
    let id = req.query.search ? req.query.search : req.params.productID;
    axios(`${process.env.URL}/products/product_search?id=${id}&secretKey=${process.env.SECRET_KEY}`)
    .then(result => {
        let breadcrumbs = [];
        let arr = result.data[0].primary_category_id.split('-');
        let temp = ''
        for(let i = 0; i < arr.length; i++) {
            temp = temp ? temp + '-' + arr[i] : arr[i];
            breadcrumbs.push(temp);
        }
        breadcrumbs.push(req.params.productID)
        res.render('productDescription',{product:result.data,breadcrumbs})
     })
    .catch(err => console.log(err))
}

module.exports = getProductByID;
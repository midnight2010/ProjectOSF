const axios = require('axios');
function itemsByCategory(req,res) { 
    axios(`${process.env.URL}/categories?secretKey=${process.env.SECRET_KEY}`)
    .then(result=> {
        let arr = result.data.filter(item => item.parent_category_id == `${req.params.id || req.params.name}`)
        let breadcrumbs = req.path.slice(1).split('/');
        console.log(breadcrumbs)
        res.render('index',{categories:arr,breadcrumbs})
    })
    .catch(err => console.log(err))
}



module.exports = itemsByCategory;
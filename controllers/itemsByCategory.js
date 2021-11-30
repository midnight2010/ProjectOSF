const axios = require('axios');
const helper = require('../helperFunct/helper')
function itemsByCategory(req,res) { 
    axios(`${process.env.URL}/categories?secretKey=${process.env.SECRET_KEY}`)
    .then(result=> {
        let temp = req.params.subcat || req.params.cat;
        let arr = result.data.filter(item => item.parent_category_id == `${temp}` && item.id !== 'womens-clothing-feeling-red')
        const {name,page_description}= result.data.find(item => item.id == (req.params.cat))
        let breadcrumbs = helper(temp.split('-'))
        res.render('home',{categories:arr,breadcrumbs,info:{name,page_description}})
    })
    .catch(err => res.json(err))
}



module.exports = itemsByCategory;
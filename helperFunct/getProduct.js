const axios = require('axios');

async function getProduct(items) {
    let results = [];

    for (let i = 0; i < items.length; i++) {
        // add promises one by one
        results.push(
            axios(`${process.env.URL}/products/product_search?id=${items[i].productId}&secretKey=${process.env.SECRET_KEY}`)  
            .then(({ data }) => {
            const {name,page_description,id} = data[0];
            let link = data[0].image_groups.find(element => element.view_type == 'small').images[0].link
            return {name,page_description,link}
            })
        );
    }
   const products = await axios.all(results);
 
   return products;
}


module.exports = getProduct
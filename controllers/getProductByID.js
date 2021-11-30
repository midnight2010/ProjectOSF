const axios = require("axios");
const helper = require("../helperFunct/helper");
function getProductByID(req, res) {
  let id = req.query.search ? req.query.search : req.params.productID;
  axios(
    `${process.env.URL}/products/product_search?id=${id}&secretKey=${process.env.SECRET_KEY}`
  )
    .then((result) => {
      console.log(result);
      let variants = result.data[0].variants;
      if (variants.length > 0)
        if (variants[0].variation_values?.size) {
          variants.sort(
            (a, b) => a.variation_values?.size - b.variation_values?.size
          );
        } else if (variants[0].variation_values?.accessorySize) {
          variants.sort(
            (a, b) =>
              a.variation_values?.accessorySize -
              b.variation_values?.accessorySize
          );
        }
      let arr = result.data[0].primary_category_id.split("-");
      let breadcrumbs = helper(arr);
      breadcrumbs["_" + id] = "/" + id;
      variants = variants ? variants : "";
      res.render("productDescription", {
        product: result.data,
        breadcrumbs,
        id: id,
        variants,
      });
    })
    .catch((err) => res.render("error", { msg: err }));
}

module.exports = getProductByID;

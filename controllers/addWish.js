const axios = require("axios");

function addWish(req, res) {
  if (req.session.user) {
    axios
      .post(
        `${process.env.URL}/wishlist/addItem`,
        {
          secretKey: process.env.SECRET_KEY,
          productId: req.body.id,
          variantId: req.body.variant,
          quantity: req.body.qty,
        },
        {
          headers: { Authorization: `Bearer ${req.session.user.secret}` },
        }
      )
      .then(res.send("Product added to the WishList"))
      .catch((err) => res.json(err));
  } else {
    res.send("You are not logged in");
  }
}

module.exports = addWish;

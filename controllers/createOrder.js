const axios = require("axios");

function createOrder(req, res) {
  let { items, details } = req.body;
  items = JSON.parse(items);

  let newDetails = items.map((elem, index) => {
    return {
      variants: elem.variant,
      productId: elem.productId,
      quantity: details.purchase_units[0].items[index].quantity,
    };
  });
  let id = details.id;
  axios
    .post(
      `${process.env.URL}/orders`,
      {
        secretKey: process.env.SECRET_KEY,
        address: "address",
        paymentId: id,
        items: newDetails,
      },
      {
        headers: { Authorization: `Bearer ${req.session.user.secret}` },
      }
    )
    .then(res.render("home"))
    .catch((err) => res.json(err));
}

module.exports = createOrder;

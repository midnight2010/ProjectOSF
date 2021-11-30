const axios = require("axios");
const paypal = require("@paypal/checkout-server-sdk");
require("dotenv").config();

clientId = process.env.PAYPAL_CLIENT_ID;
clientSecret = process.env.PAYPAL_CLIENT_SECRET;
const Environment = paypal.core.SandboxEnvironment;
const paypalClient = new paypal.core.PayPalHttpClient(
  new Environment(clientId, clientSecret)
);
async function pay(req, res) {
  let { items, price } = req.body;
  price = price.slice(0, price.length - 1);
  items = JSON.parse(items);
  let newItems = [];
  newItems = items.map((elem) => {
    return {
      name: elem.name,
      unit_amount: {
        currency_code: "USD",
        value: elem.variant.price,
      },
      quantity: elem.quantity,
    };
  });
  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: price,
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: price,
            },
          },
        },
        description: "Alibazon",
        items: newItems,
      },
    ],
  });

  try {
    const order = await paypalClient.execute(request);
    res.json(order.result.id);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

module.exports = pay;

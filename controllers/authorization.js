const axios = require("axios");

function authorization(req, res) {
  if (req.params.sign == "signIn") {
    axios
      .post(`${process.env.URL}/auth/signin`, {
        secretKey: process.env.SECRET_KEY,
        email: req.body.email,
        password: req.body.password,
      })
      .then((result) => {
        let user = result.data.user;
        req.session.user = {};
        req.session.user.secret = result.data.token;
        req.session.user.name = user.name;
        req.session.user.email = user.email;
        req.session.user.password = user.password;
        req.session.user.joined = user.createdAt;
        res.redirect("/");
      })
      .catch((err) => res.json());
  } else {
    axios
      .post(`${process.env.URL}/auth/signup`, {
        secretKey: process.env.SECRET_KEY,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
      .then(res.redirect("/login"))
      .catch((err) => res.json());
  }
}

module.exports = authorization;

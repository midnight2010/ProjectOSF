const axios = require('axios');

async function checkEmpty(path,secret) {
  try{
      const item = await axios(`${process.env.URL}/${path}?secretKey=${process.env.SECRET_KEY}`,{
          headers: { Authorization: `Bearer ${secret}` }
      })
      return [item.data,1];
  }
  catch(err) {
    return [`There is no ${path} created for this user`,0]
  }
}

module.exports = checkEmpty
const axios = require('axios');

function authorization(req,res) {
    if(req.params.sign == 'signIn') {
        axios.post(`${process.env.URL}/auth/signin`,{
            secretKey:process.env.SECRET_KEY,
            name:req.body.name,
            password:req.body.password})
            .then(result => console.log(result.data))
            .catch(err => console.log(err)) 
    }
    else {
     axios.post(`${process.env.URL}/auth/signup`,{
    secretKey:process.env.SECRET_KEY,
    name:req.body.name,
    email:req.body.email,
    password:req.body.password})
    .then(result => console.log(result.data))
    .catch(err => console.log(err))   
    }
  
  

}

module.exports = authorization
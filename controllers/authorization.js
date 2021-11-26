const axios = require('axios');
const config = require('config');

function authorization(req,res) {
    if(req.params.sign == 'signIn') {
       
        axios.post(`${process.env.URL}/auth/signin`,{
            secretKey:process.env.SECRET_KEY,
            email:req.body.email,
            password:req.body.password})
            .then(result =>
                {
                console.log(result.data)
                config.email = result.user.email;
                config.pass = result.user.password;
                config.JWT = result.token;
                res.redirect('/home')
                } )
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
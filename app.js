const express = require('express');
const path = require("path");
const sentry = require('./sentry')
const axios = require('axios')
const session = require('express-session')


const categoryRoutes = require('./routes/categoryRoutes')
const getProductsRoute = require('./routes/getProductsRoute')
const authorizationRoute = require('./routes/authorizationRoute')
const loggedRoutes = require('./routes/loggedRoutes')
const orderRoutes = require('./routes/orderRoutes')

require('dotenv').config()

//paypal

//express app
const app = express();

//register view engine
app.set("views", __dirname + "/views")
app.set('view engine','ejs')

//middleware
app.use(express.static(path.join(__dirname,"/public")))
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(session({
    secret: 'secret token',
    resave: false,
    saveUninitialized: false,
    name: 'Session Cookie',
    cookie:{
        maxAge:3600000,
    }
    
}))

app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    next();
  });

app.get('/',(req,res) => {
    res.render('home');
})

app.use('/payment',orderRoutes)
app.use('/login',authorizationRoute)
app.use('/logged',loggedRoutes)
app.use('/products',getProductsRoute)
app.use('/categories',categoryRoutes)


app.use('/',(req,res)=> {
    res.render('error',{msg:"No such page"})
})



const PORT = process.env.PORT || 3000;

//listen for requests
app.listen(PORT,()=>{
    console.log('Server has started')
})









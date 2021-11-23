const express = require('express');
const path = require("path");
const sentry = require('./sentry')
const axios = require('axios')
const categoryRoutes = require('./routes/categoryRoutes')
const getProductsRoute = require('./routes/getProductsRoute')
require('dotenv').config()
//express app
const app = express();

//register view engine
app.set("views", __dirname + "/views")
app.set('view engine','ejs')

//middleware
app.use(express.static(path.join(__dirname,"/public")))
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get('/',(req,res) => {
    res.render('index')
})

app.use('/products',getProductsRoute)
app.use('/categories',categoryRoutes)








//listen for requests
app.listen(5000,()=>{
    console.log('Server has started')
})









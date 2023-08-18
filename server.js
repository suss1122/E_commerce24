const exp = require('express');
const app = exp();
const BP = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const slashRoute = require('./routes/slash');
const slashRegister = require('./routes/slash-register');
const slashHome = require('./routes/slash-home');
const slashDetails = require('./routes/slash-details');
const slashAccount = require('./routes/slash-account');
const slashCart = require('./routes/slash-cart');
// const addProduct = require('./models/products');

mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce", {useNewUrlParser:true});

app.use(BP.urlencoded({extended:true}));
app.use(exp.static(path.join('public')));
app.set('view engine', 'ejs');

app.use(slashRoute);
app.use(slashRegister);
app.use(slashHome);
app.use(slashDetails);
app.use(slashAccount);
app.use(slashCart);

// app.get('/temp', async(req,res) => {
//     const obj = new addProduct('i9 Processor', '../images/poster14.jpg', 'Silver', 'Latest Intel i9 Core Processor, high CPU performance', 'Rs 24,999.00', 'Intel', 'i9', 'Only 2 left');
//     obj.append();
//     res.send("ok");
// })

app.use((req,res) => {
    res.status(404).send('<h1>Page Does Not Exists, error 404</h1>');
})

app.listen(3000);
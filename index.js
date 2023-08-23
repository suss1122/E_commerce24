const exp = require('express');
const app = exp();
const BP = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');

const slashRoute = require('./routes/slash');
const slashRegister = require('./routes/slash-register');
const slashHome = require('./routes/slash-home');
const slashDetails = require('./routes/slash-details');
const slashAccount = require('./routes/slash-account');
const slashCart = require('./routes/slash-cart');
const slashOrder = require('./routes/slash-order');
const slashWishlist = require('./routes/slash-wishlist');
// const addProduct = require('./models/products');

mongoose.connect("mongodb+srv://AdityaBatgeri:Kiq2w2Ak7CR9bYgb@cluster0.d42f6ow.mongodb.net/Ecommerce?retryWrites=true&w=majority", {useNewUrlParser:true});

app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    resave: false 
}));

app.use(BP.urlencoded({extended:true}));
app.use(exp.static(path.join('public')));
app.set('view engine', 'ejs');

app.use(slashRoute);
app.use(slashRegister);
app.use(slashHome);
app.use(slashDetails);
app.use(slashAccount);
app.use(slashCart);
app.use(slashOrder);
app.use(slashWishlist);

// app.get('/temp', async(req,res) => {
//     const obj = new addProduct('i9 Processor', '../images/poster14.jpg', 'Silver', 'Latest Intel i9 Core Processor, high CPU performance', 'Rs 24,999.00', 'Intel', 'i9', 'Only 2 left');
//     obj.append();
//     res.send("ok");
// })

app.use((req,res) => {
    res.status(404).send('<h1>Page Does Not Exists, error 404</h1>');
})

app.listen(3000);
const exp = require('express');
const path = require('path');
const route = exp.Router();
const mongoose = require('mongoose');
const newProfile = require('../models/profiles');

route.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'register.html'));
})

const struc = new mongoose.Schema({Username:String, Email:String, Password:String, Id:String, Cart:Array, Orders:Array});
const data = mongoose.model("profile", struc);

route.post('/register', (req,res) => {


    
    const obj = new newProfile(req.body.USERNAME, req.body.EMAIL, req.body.PASSWORD);
    const tmp = obj.get();

    const uplaod = new data({Username:tmp.name, Email:tmp.email, Password:tmp.pass, Id:tmp.id, Cart:tmp.cart, Orders:tmp.orders});
    uplaod.save();

    res.send("<h1>Account Registered</h1>");
})

module.exports = route;
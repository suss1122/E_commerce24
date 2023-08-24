const exp = require('express');
const newProfile = require('../models/profiles');
const route = exp.Router();
const path = require('path');

route.get('/order', (req,res) => {
    if(!req.session.USER){res.redirect('/warn')}
    else{

    res.sendFile(path.join(__dirname, '../', 'views', 'order.html'));
    }
})

route.post('/placeorder', async (req,res) => {

    if(!req.session.USER){res.redirect('/warn')}
    else{

    const curr = req.session.USER;

    await newProfile.order(curr).then();
    res.redirect('/account');
    }
})

module.exports = route;
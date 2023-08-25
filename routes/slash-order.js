const exp = require('express');
const newProfile = require('../models/profiles');
const route = exp.Router();
const path = require('path');
const newOrder = require('../models/orders');

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

    let temp;
    await newProfile.checkUsername(curr).then(ans => {temp=ans.Cart});

    // await newProfile.order(curr).then();
    const obj = new newOrder(curr, req.body.date, temp);
    obj.upload();

    res.redirect('/account');
    }
})

module.exports = route;
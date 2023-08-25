const exp = require('express');
const newProfile = require('../models/profiles');
const addProduct = require('../models/products');
const newOrder = require('../models/orders');
const route = exp.Router();

route.get('/account',async (req,res) => {

    if(!req.session.USER){res.redirect('/warn')}
    else{

    const curr = req.session.USER;
    let prof, ord;
    await newProfile.checkUsername(curr).then(ans => {prof=ans; ord=ans.Orders});

    const arr = [];
    for (let i=0; i<ord.length; i++)
    {
        await newOrder.getOrder(ord[i]).then(ans => {arr.push(ans)});
    }

    const data = {name:prof.Username, email:prof.Email, password:prof.Password, arr:arr};

    res.render('account', data);
    }
})

module.exports = route;
const exp = require('express');
const newProfile = require('../models/profiles');
const addProduct = require('../models/products');
const route = exp.Router();

route.get('/account',async (req,res) => {

    if(!req.session.USER){res.send('<h1>pls login first</h1>')}
    else{

    const curr = req.session.USER;
    let prof;
    await newProfile.checkUsername(curr).then(ans => {prof=ans});

    const OrdArray=[];
    for (let i=0; i<prof.Orders.length; i++)
    {
        await addProduct.fetchProduct(prof.Orders[i]).then(ans => {OrdArray.push(ans)});
    }

    const data = {name:prof.Username, email:prof.Email, password:prof.Password, arr:OrdArray};

    res.render('account', data);
    }
})

module.exports = route;
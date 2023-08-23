const exp = require('express');
const addProduct = require('../models/products');
const newProfile = require('../models/profiles');
const route = exp.Router();

route.get('/details/:ID', async (req,res) => {

    if(!req.session.USER){res.send('<h1>pls login first</h1>')}
    else{

    const key = req.params.ID;

    let prod;
    await addProduct.fetchProduct(key).then(ans => {prod=ans;});

    const curr = req.session.USER;
    let arr, Warr;
    await newProfile.checkUsername(curr).then(ans => {arr=ans.Cart;});
    await newProfile.checkUsername(curr).then(ans => {Warr=ans.Wishlist;});

    let present=false;
    for (let i=0; i<arr.length; i++)
    {
        if (key==arr[i]) {present=true; break;}
    }

    let Wpresent=false;
    for (let i=0; i<Warr.length; i++)
    {
        if (key==Warr[i]) {Wpresent=true; break;}
    }

    const data = {name:prod.Prod_name, img:prod.Prod_img, color:prod.Prod_color, desc:prod.Prod_desc, price:prod.Prod_price, brand:prod.Prod_brand, model:prod.Prod_model, stock:prod.Prod_stock, id:key, present:present, Wpresent:Wpresent};

    res.render('details', data);
    }
})

module.exports = route;
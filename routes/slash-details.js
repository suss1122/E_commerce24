const exp = require('express');
const addProduct = require('../models/products');
const newProfile = require('../models/profiles');
const route = exp.Router();

route.get('/details/:ID', async (req,res) => {
    const key = req.params.ID;

    let prod;
    await addProduct.fetchProduct(key).then(ans => {prod=ans;});

    const curr = req.session.USER;
    let arr;
    await newProfile.checkUsername(curr).then(ans => {arr=ans.Cart;});

    let present=false;
    for (let i=0; i<arr.length; i++)
    {
        if (key==arr[i]) {present=true; break;}
    }

    const data = {name:prod.Prod_name, img:prod.Prod_img, color:prod.Prod_color, desc:prod.Prod_desc, price:prod.Prod_price, brand:prod.Prod_brand, model:prod.Prod_model, stock:prod.Prod_stock, id:key, present:present};

    res.render('details', data);
})

module.exports = route;
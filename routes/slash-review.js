const exp = require('express');
const addProduct = require('../models/products');
const route = exp.Router();

route.post('/review/:ID', async (req,res) => {
    if (!req.session.USER) {res.redirect('/warn')}
    else{

    const key = req.params.ID;

    await addProduct.addReview(key, req.session.USER, req.body.user_review).then();
    res.redirect('/details/' + key);
    }
})

route.get('/delComment/:tmp', async (req,res) =>{ 
    const key = req.params.tmp;
    const curr = req.session.USER;
    await addProduct.deleteRev(key, curr).then();

    res.redirect('/details/'+key);
})

module.exports = route;
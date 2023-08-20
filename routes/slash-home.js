const exp = require('express');
const { getAllProd } = require('../models/products');
const route = exp.Router();

route.get('/home', async (req,res) => {

    if(!req.session.USER){res.send('<h1>pls login first</h1>')}
    else{

    let temp;
    await getAllProd().then(ans => {temp=ans});
    const data = {arr:temp};
    res.render('home', data);
    }
})

module.exports = route;
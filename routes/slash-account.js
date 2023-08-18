const exp = require('express');
const newProfile = require('../models/profiles');
const route = exp.Router();

route.get('/account',async (req,res) => {

    const curr = newProfile.getCurrentUser();
    let prof;
    await newProfile.checkUsername(curr).then(ans => {prof=ans});
    const data = {name:prof.Username, email:prof.Email, password:prof.Password};

    res.render('account', data);
    // res.send('ok');
})

module.exports = route;
const exp = require('express');
const path = require('path');
const { checkUsername, checkEmail } = require('../models/profiles');
const route = exp.Router();

route.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
})

route.post('/', async (req,res) => {
    const user_or_email = req.body.USERNAME_EMAIL;
    const post_password = req.body.PASSWORD;

    let check1;
    await checkUsername(user_or_email).then(ans => {check1=ans});

    let check2;
    await checkEmail(user_or_email).then(ans => {check2=ans});

    let flag1='ok';
    if (check1==null && check2==null) {flag1='not_ok';}

    let flag2='ok';
    if (flag1=='ok')
    {
        if(check1!=null) 
        {
            if (post_password!=check1.Password) {flag2='not_ok'}
        }
        else
        {
            if (post_password!=check2.Password) {flag2='not_ok'}
        }
    }

    const data = {f1:flag1, f2:flag2};
    if (flag1=='ok' && flag2=='ok')
    {
        res.redirect("/home");
    }
    else 
    {
        res.render("login", data);
    }
})

module.exports = route;
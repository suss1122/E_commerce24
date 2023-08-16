const exp = require('express');
const app = exp();
const BP = require('body-parser');
const path = require('path');

const slashRoute = require('./routes/slash');

app.use(BP.urlencoded({extended:true}));
app.use(exp.static(path.join('public')));

app.use(slashRoute);

app.use((req,res) => {
    res.send('<h1>Page Does Not Exists, error 404</h1>');
})

app.listen(3000);
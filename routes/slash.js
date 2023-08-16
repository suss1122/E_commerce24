const exp = require('express');
const path = require('path');
const route = exp.Router();

route.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
})

module.exports = route;
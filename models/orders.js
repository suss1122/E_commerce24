const mongoose = require('mongoose');
const newProfile = require('./profiles');

const struc = new mongoose.Schema({Username:String, Order_date:String, Products:Array});
const Order = mongoose.model("order", struc);

module.exports = class newOrder
{
    constructor(name, date, arr)
    {
        this.name=name;
        this.date=date;
        this.arr=arr;
        this.id = Math.random().toString();
    }

    async upload()
    {
        const up = new Order({Username:this.name, Order_date:this.date, Products:this.arr});
        up.save();

        await newProfile.updateOrder(this.name, this.id).then();
    }
}
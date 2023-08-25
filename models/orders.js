const mongoose = require('mongoose');
const newProfile = require('./profiles');

const struc = new mongoose.Schema({Username:String, Order_date:String, Products:Array, Order_Id:String});
const Order = mongoose.model("order", struc);

module.exports = class newOrder
{
    constructor(name, date, arr)
    {
        this.name=name;
        this.date=date;
        this.arr=arr;
        this.order_ID = Math.random().toString();
    }

    async upload()
    {
        const up = new Order({Username:this.name, Order_date:this.date, Products:this.arr, Order_Id:this.order_ID});
        up.save();

        await newProfile.updateOrder(this.name, this.id).then();
    }

    static async getOrder(ID)
    {
        let temp;
        await Order.findOne({id:ID}).then(ans => {temp=ans});
        return temp;
    }
}
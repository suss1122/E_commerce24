const mongoose = require('mongoose');

const struc = new mongoose.Schema({Prod_name:String, Prod_img:String, Prod_id:String, Prod_color:String, Prod_desc:String, Prod_price:String, Prod_brand:String, Prod_model:String, Prod_stock:String});
const Product = mongoose.model("product", struc);

module.exports = class addProduct
{
    constructor(pname, pimg, pcol, pdesc, pprice, pbrand, pmod, pstock)
    {
        this.pname=pname;
        this.pimg=pimg;
        this.pcol=pcol;
        this.pdesc=pdesc;
        this.pprice=pprice;
        this.pbrand=pbrand;
        this.pmod=pmod;
        this.pstock=pstock;
        this.pid=Math.random().toString();
    }

    append()
    {
        const upload = new Product({Prod_name:this.pname, Prod_img:this.pimg, Prod_id:this.id, Prod_color:this.pcol, Prod_desc:this.pdesc, Prod_price:this.pprice, Prod_brand:this.pbrand, Prod_model:this.pmod, Prod_stock:this.pstock});
        upload.save();
    }

    static async getAllProd()
    {
        let temp;
        await Product.find().then(ans => {temp=ans})
        return temp;
    }
}
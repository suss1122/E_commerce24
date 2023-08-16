const mongoose = require('mongoose');

const struc = new mongoose.Schema({Username:String, Email:String, Password:String, Id:String, Cart:Array, Orders:Array});
const Profile = mongoose.model("profile", struc);

module.exports = class newProfile
{
    constructor(name, email, pass)
    {
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.id = Math.random().toString();
    }

    save_profile()
    {
        const uplaod = new Profile({Username:this.name, Email:this.email, Password:this.pass, Id:this.id, Cart:[], Orders:[]});
        uplaod.save();
    }

    static async getAllProf()
    {
        const arr = [];
        await Profile.find({}).then(ans => {
            for(let i=0; i<ans.length; i++)
            {
                arr.push(ans[i]);
            }
        });
        return arr;
    }
}
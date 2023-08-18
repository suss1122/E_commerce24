const mongoose = require('mongoose');

const struc = new mongoose.Schema({Username:String, Email:String, Password:String, Id:String, Cart:Array, Orders:Array});
const Profile = mongoose.model("profile", struc);

let Uname;
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

    static async checkUsername(input)
    {
        let check;
        await Profile.findOne({Username:input}).then(ans => {check=ans})
        return check;
    }

    static async checkEmail(input)
    {
        let check;
        await Profile.findOne({Email:input}).then(ans => {check=ans})
        return check;
    }

    static saveCurrentUser(input){Uname = input};

    static getCurrentUser() {return Uname};
}
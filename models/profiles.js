module.exports = class newProfile
{
    constructor(name, email, pass)
    {
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.id = Math.random().toString();
    }

    get()
    {
        const obj = {name:this.name, email:this.email, pass:this.pass, id:this.id, cart:[], orders:[]};
        return obj;
    }
}
const mongoose = require ('mongoose')


const userschema = new mongoose.Schema({
    name:String,
    age:Number,
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/^\S+@\S+\.\S+$/,'please put a valid email']
    },
    password:{
        type:String,

    },
})
module.exports = mongoose.model('user',userschema )
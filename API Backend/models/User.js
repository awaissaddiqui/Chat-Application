const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        min:3,
        max: 20
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    phone:{
        type: String,
        required: false,
        min:11

    },
    password:{
        type: String,
        required: true,
        min:3
    }

}) 
module.exports = mongoose.model("User", userSchema)
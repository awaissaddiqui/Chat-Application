const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minLength:[3, 'Name is too short'],
        maxLength: 20
    },
    email:{
        type:String,
        required: true,
        lowercase:true
    },
    phone:{
        type:String,
        required:true,
        minLength:8,
        maxLength:14

    },
    password:{
        type: String,
        required: true,
        min:3
    }

}) 
module.exports = mongoose.model("User", userSchema)
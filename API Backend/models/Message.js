const mongoose = require("mongoose")

const newSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lastActive:Date
    },
    message:{
        type:String,
        min:2,
        max:200
    },
    phoneNo:{
        type:String
    }
})
module.exports=mongoose.model("Inbox",newSchema)
const mongoose = require("mongoose")

const newSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        minLength: 1,
        maxLength: 200
    }
})
module.exports = mongoose.model("Inbox", newSchema)
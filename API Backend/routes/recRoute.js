const recRoute = require("express").Router();
const verifyToken = require("./verifyToken");
const Message = require("../models/Message");

recRoute.get("/", verifyToken, async(req,res)=>{
    const {phoneNo} = req.body;
    const msg = await Message.findOne({phoneNo});
    if(!msg) return res.status(400).send("Not Found")
    res.send(msg.name+"\n" + msg.message)

})
module.exports = recRoute;
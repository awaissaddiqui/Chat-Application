const recRoute = require("express").Router();
const verifyToken = require("./verifyToken");
const Message = require("../models/Message");

recRoute.post("/", verifyToken, async(req,res)=>{
    const {name} = req.body;
    const msg = await Message.findOne({name:req.body.name});
    if(!msg) return res.status(400).send("Not Found")
    res.send(msg)

})
module.exports = recRoute;
const userRoute = require("express").Router();
const bcryptjs= require("bcryptjs");
const User = require("../models/User");
const userValidation = require("./validation");
const loginValidation=require("./validation")
const jwt = require("jsonwebtoken");
const verifyToken = require("./verifyToken");
const Inbox = require("../models/Message")

userRoute.get("/register", (req, res)=>{
    res.send("we are at user route ");
    const data = req.body; 
   console.log(data);
})
userRoute.post("/register", async(req, res)=>{
    const {name, email, phone, password}= req.body;
    const {error} = userValidation(req.body);
    //if there is error in validation then error will send to frontend app
    if(error) return res.status(400).send(error.details[0].message)
    //If not error then "given user" will find in database . 
    const findUser= await User.findOne({email:req.body.email})
    if(findUser) return res.status(400).send("Email already register")
    //If user find in data base then message will send
    //After that password will be hash and then user will save in database
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(password , salt)

    const user = new User({
        name,
        email,
        phone,
        password:hash
    });

    try{
        const savedUser = await user.save();
        res.status(200).send(savedUser);
    }
    catch{
        res.status(400).send("Error")
    }
   

    
})
userRoute.post("/inbox",verifyToken, async(req, res)=>{
    const {name , message}=req.body;
    const newMsg= new Inbox({
        name,
        message,
    })
    try{

        const saveMessage = await newMsg.save();
        res.status(200).send(name +"\n"+message);
    }catch(err){

        if(err) return res.status(400).send(err)
    }
})
userRoute.delete("/inbox/:id", verifyToken,async(req, res)=>{
        const id= req.params.id;
        const deleteMsg= await Inbox.findByIdAndDelete(id);
        // if(!deleteMsg) return res.status(400).send("Messge deleted failed! Please Try again")
        res.send(deleteMsg);
})
//Login 
userRoute.get("/login",verifyToken,(req,res)=>{
        res.send("We are at GET Route ")
})
userRoute.post("/login",async(req,res)=>{
    const {email, password}=req.body;
    const {error}=loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message)

    const findUser = await User.findOne({email:req.body.email})
    if(!findUser) return res.status(400).send("You don't have an account!\n Please Login First"); 

    const compare = await bcryptjs.compare(password, findUser.password);
    if(!compare) return res.status(400).send("Username or password are incorrect");

    const token = jwt.sign({email:findUser.email}, process.env.SECRETKEY);
    res.status(200).header("token", token);

    res.status(200).send("Logged In successfully")
    
})
module.exports = userRoute
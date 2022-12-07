const userRoute = require("express").Router();
const bcryptjs= require("bcryptjs");
const User = require("../models/User");
const userValidation = require("./validation");

userRoute.get("/register", (req, res)=>{
    res.send("we are at user route ");
    //const data = req.body; 
   // console.log(data);
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
userRoute.put("/", (req, res)=>{

})
userRoute.delete("/", (req, res)=>{

})

module.exports = userRoute
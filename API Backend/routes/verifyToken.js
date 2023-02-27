const jwt = require("jsonwebtoken")
function verifyToken(req,res,next){
    const token = req.header("token");
    //console.log(token);
    if(!token) return res.status(403).send("Token not found")

try{
    const verified = jwt.verify(token,process.env.SECRETKEY)
    req.findUser=verified;
    next();
}
catch(err){
    res.status(400).send(err);
}
    
}
module.exports= verifyToken;
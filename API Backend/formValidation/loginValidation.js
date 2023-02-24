const Joi = require("joi")
// Login validation

 function loginValidation(login){
     const schema = Joi.object({
         email:Joi
            .string()
            .email()
            .required(),
         password:Joi
             .string()
             .required()
     })
     const valided = schema.validate(login)
     return valided;
 }


module.exports=loginValidation;
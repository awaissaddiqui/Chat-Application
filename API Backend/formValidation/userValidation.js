const Joi = require("joi")

function uValidation(data){
    const schema = Joi.object({
        name: Joi
            .string()
            .min(2)
            .max(15)
            .required(),
        email:Joi
            .string()
            .email()
            .required(),
        phone:Joi
            .string()
            .pattern(/([0-9]){8,14}/),

            
        password:Joi    
            .string()
            .required()
            .min(2)
            .max(15)
    })
    const valid = schema.validate(data)
    return valid;
}


 module.exports= uValidation;
 


  
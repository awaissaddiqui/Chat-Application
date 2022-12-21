const Joi = require("joi")

function userValidation(data){
    const schema = Joi.object({
        name: Joi
            .string()
            .min(3)
            .required()
            .max(15),
        email:Joi
            .string()
            .email()
            .required(),
        phone:Joi
            .string()
            .min(11)
            .max(15),
        password:Joi    
            .string()
            .required()
            .min(3)
            .max(15)
    })
    const valid = schema.validate(data)
    return valid;
}
// Login validation

function loginValidation(data){
    const schema = Joi.object({
        email:Joi
            .string()
            .email()
            .required(),
        password:Joi
            .string()
            .required()
            .min(3)
            .max(15)
    })
    const valid = schema.validate(data)
    return valid;
}
module.exports= userValidation;
module.exports=loginValidation;
const Joi = require("joi")

function userValidation(data){
    const schema = Joi.object({
        name: Joi
            .string()
            .min(3)
            .max(15)
            .required(),
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
     const valided = schema.validate(data)
     return valided;
}
// function inboxValidation(data){
//     const schema = Joi.object({
//         name:Joi
//             .string()
//             .required(),
//         message:Joi
//             .string()
//             .required(),
//         phone: Joi
//             .string()
//             .required()
//             .min(11)
//             .max(12)
//     })
//     const inboxValid = schema.validate(data)
//     return inboxValid
// }
 module.exports= userValidation;
// module.exports=loginValidation;
// module.exports= inboxValidation;
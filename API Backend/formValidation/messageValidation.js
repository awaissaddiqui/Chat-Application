const Joi = require("joi")
function inboxValidation(inboxData) {
    const schema = Joi.object({
        name: Joi
            .string()
            .required(),
        message: Joi
            .string()
            .required()
            .min(1)
            .max(200),

    })
    const inboxValid = schema.validate(inboxData)
    return inboxValid
}

module.exports = inboxValidation;
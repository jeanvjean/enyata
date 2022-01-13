import Joi from '@hapi/joi';


const createUserSchema = Joi.object().keys({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password:Joi.string().required().min(6).min(6)
});

const updateUser = Joi.object().keys({
    first_name: Joi.string(),
    last_name: Joi.string(),
    email: Joi.string(),
    password:Joi.string().min(6)
})

export {
    createUserSchema,
    updateUser
}
import { createUserSchema, updateUser } from './user';
import Joi from '@hapi/joi';
// import expressJoi from 'express-joi-validation';

const Validator =  require('express-joi-validation').createValidator({})

export {
    createUserSchema,
    updateUser,
    Validator
}
import Joi from "joi";

export const userSchema = Joi.object({
    username: Joi.string().min(4).required(),
    password: Joi.string().min(4).required(),
})
import Joi from "joi";

export const messageBodySchema = Joi.object({
    message: Joi.string().required(),
});

export const messageParamsSchema = Joi.object({
    boardId: Joi.number().required(),
})
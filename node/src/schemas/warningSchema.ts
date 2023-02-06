import Joi from "joi";

export const warningBodySchema = Joi.object({
    text: Joi.string().required(),
});

export const warningParamsSchema = Joi.object({
    boardId: Joi.number().required(),
})
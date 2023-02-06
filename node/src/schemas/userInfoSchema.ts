import Joi from "joi";

export const userInfoBodySchema = Joi.object({
    picture: Joi.string().required(),
    nickname: Joi.string().required(),
    status: Joi.string().required(),
});

export const userInfoParamsSchema = Joi.object({
    boardId: Joi.number().required(),
})


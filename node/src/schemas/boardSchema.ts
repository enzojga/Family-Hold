import Joi from "joi";

export const boardSchema = Joi.object({
    name: Joi.string().max(15).required(),
    icon: Joi.number().min(1).max(4).required(),
    invite: Joi.string().required(),
});

export const boardParamsSchema = Joi.object({
    boardId: Joi.number().required(),
});

export const boardInviteBody = Joi.object({
    invite: Joi.string().required(),
})
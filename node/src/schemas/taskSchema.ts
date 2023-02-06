import Joi from "joi";

export const taskSchemaBody = Joi.object({
    name: Joi.string().required(),
});

export const taskSchemaParams = Joi.object({
    taskId: Joi.number().required(),
});

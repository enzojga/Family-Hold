"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskSchemaParams = exports.taskSchemaBody = void 0;
const joi_1 = __importDefault(require("joi"));
exports.taskSchemaBody = joi_1.default.object({
    name: joi_1.default.string().required(),
});
exports.taskSchemaParams = joi_1.default.object({
    taskId: joi_1.default.number().required(),
});

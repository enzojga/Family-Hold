"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInfoParamsSchema = exports.userInfoBodySchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userInfoBodySchema = joi_1.default.object({
    picture: joi_1.default.string().required(),
    nickname: joi_1.default.string().required(),
    status: joi_1.default.string().required(),
});
exports.userInfoParamsSchema = joi_1.default.object({
    boardId: joi_1.default.number().required(),
});

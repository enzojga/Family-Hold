"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardInviteBody = exports.boardParamsSchema = exports.boardSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.boardSchema = joi_1.default.object({
    name: joi_1.default.string().max(15).required(),
    icon: joi_1.default.number().min(1).max(4).required(),
    invite: joi_1.default.string().required(),
});
exports.boardParamsSchema = joi_1.default.object({
    boardId: joi_1.default.number().required(),
});
exports.boardInviteBody = joi_1.default.object({
    invite: joi_1.default.string().required(),
});

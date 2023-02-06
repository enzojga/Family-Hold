"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.warningParamsSchema = exports.warningBodySchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.warningBodySchema = joi_1.default.object({
    text: joi_1.default.string().required(),
});
exports.warningParamsSchema = joi_1.default.object({
    boardId: joi_1.default.number().required(),
});

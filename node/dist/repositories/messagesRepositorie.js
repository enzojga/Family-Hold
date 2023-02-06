"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagesRepositorie = void 0;
const prismaDb_1 = __importDefault(require("../database/prismaDb"));
const create = (user_id, board_id, message) => {
    return prismaDb_1.default.messages.create({
        data: {
            user_id,
            board_id,
            message
        }
    });
};
const findMany = (board_id) => {
    return prismaDb_1.default.messages.findMany({
        where: {
            board_id,
        },
        include: {
            Users: {
                select: {
                    username: true,
                    UsersInfo: true
                },
            }
        },
    });
};
exports.messagesRepositorie = {
    create,
    findMany
};

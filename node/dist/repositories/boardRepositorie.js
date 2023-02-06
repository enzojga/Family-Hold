"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardRepositorie = void 0;
const prismaDb_1 = __importDefault(require("../database/prismaDb"));
const create = (userId, name, icon, invite) => {
    return prismaDb_1.default.boards.create({
        data: {
            owner: userId,
            name,
            icon,
            invite
        },
    });
};
const joinBoard = (user_id, board_id) => {
    return prismaDb_1.default.userBoard.create({
        data: {
            user_id,
            board_id
        }
    });
};
const getUserBoard = (user_id, board_id) => {
    return prismaDb_1.default.userBoard.findFirst({
        where: {
            user_id,
            board_id
        }
    });
};
const getBoardById = (board_id) => {
    return prismaDb_1.default.boards.findFirst({
        where: {
            id: board_id,
        }
    });
};
const getBoardsByUserId = (user_id) => {
    return prismaDb_1.default.userBoard.findMany({
        where: {
            user_id,
        },
        select: {
            Boards: true
        }
    });
};
const getBoardByInvite = (invite) => {
    return prismaDb_1.default.boards.findFirst({
        where: {
            invite,
        }
    });
};
const quitBoard = (user_id, board_id) => {
    return prismaDb_1.default.userBoard.deleteMany({
        where: {
            user_id,
            board_id
        }
    });
};
exports.boardRepositorie = {
    create,
    joinBoard,
    getUserBoard,
    getBoardById,
    getBoardsByUserId,
    getBoardByInvite,
    quitBoard
};

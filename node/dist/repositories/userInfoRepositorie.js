"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInfoRepositorie = void 0;
const prismaDb_1 = __importDefault(require("../database/prismaDb"));
const getUserInfo = (board_id, user_id) => {
    return prismaDb_1.default.usersInfo.findFirst({
        where: {
            board_id,
            user_id
        }
    });
};
const upsert = (board_id, user_id, picture, nickname, status, id) => {
    return prismaDb_1.default.usersInfo.upsert({
        where: {
            id: id ? id : 0,
        },
        update: {
            picture,
            nickname,
            status,
        },
        create: {
            board_id,
            user_id,
            picture,
            nickname,
            status
        }
    });
};
const getManyUserInfo = (board_id) => {
    return prismaDb_1.default.userBoard.findMany({
        where: {
            board_id
        },
        select: {
            Users: {
                select: {
                    username: true,
                    UsersInfo: {
                        where: {
                            board_id
                        }
                    }
                }
            }
        }
    });
};
exports.userInfoRepositorie = {
    getUserInfo,
    upsert,
    getManyUserInfo
};

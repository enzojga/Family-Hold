"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.warningRepositorie = void 0;
const prismaDb_1 = __importDefault(require("../database/prismaDb"));
const create = (creator, board_id, text) => {
    return prismaDb_1.default.warnings.create({
        data: {
            creator,
            board_id,
            text
        }
    });
};
const getManyByBoardId = (board_id) => {
    return prismaDb_1.default.warnings.findMany({
        where: {
            board_id
        },
        include: {
            Boards: {
                select: {
                    UsersInfo: true,
                }
            },
            Users: {
                select: {
                    username: true,
                }
            },
        },
        orderBy: {
            id: 'desc',
        }
    });
};
exports.warningRepositorie = {
    create,
    getManyByBoardId,
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardService = void 0;
const errors_1 = require("../errors/errors");
const boardRepositorie_1 = require("../repositories/boardRepositorie");
const create = async (userId, name, icon, invite) => {
    const verifyInvite = await boardRepositorie_1.boardRepositorie.getBoardByInvite(invite);
    if (verifyInvite) {
        throw (0, errors_1.conflictError)('Convite já cadastrado');
    }
    const board = await boardRepositorie_1.boardRepositorie.create(userId, name, icon, invite);
    await boardRepositorie_1.boardRepositorie.joinBoard(userId, board.id);
    return board;
};
const getBoardsByUserId = async (userId) => {
    const boards = await boardRepositorie_1.boardRepositorie.getBoardsByUserId(userId);
    return boards;
};
const quiBoard = async (user_id, board_id) => {
    const board = await boardRepositorie_1.boardRepositorie.getBoardById(board_id);
    if (!board) {
        throw (0, errors_1.notFoundError)();
    }
    if (board.owner === user_id) {
        throw (0, errors_1.unauthorizedError)();
    }
    await boardRepositorie_1.boardRepositorie.quitBoard(user_id, board_id);
    return;
};
const joinBoard = async (user_id, invite) => {
    const board = await boardRepositorie_1.boardRepositorie.getBoardByInvite(invite);
    if (!board) {
        throw errors_1.notFoundError;
    }
    const verifyuserBoard = await boardRepositorie_1.boardRepositorie.getUserBoard(user_id, board.id);
    if (verifyuserBoard) {
        throw (0, errors_1.conflictError)('Usuário já esta no quadro');
    }
    const userBoard = await boardRepositorie_1.boardRepositorie.joinBoard(user_id, board.id);
    return userBoard;
};
exports.boardService = {
    create,
    getBoardsByUserId,
    quiBoard,
    joinBoard
};

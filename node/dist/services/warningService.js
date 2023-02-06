"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warningService = void 0;
const errors_1 = require("../errors/errors");
const boardRepositorie_1 = require("../repositories/boardRepositorie");
const warningRepository_1 = require("../repositories/warningRepository");
const helpers_1 = require("./helpers");
const create = async (user_id, board_id, text) => {
    const verifyBoard = await boardRepositorie_1.boardRepositorie.getBoardById(board_id);
    if (!verifyBoard) {
        throw (0, errors_1.notFoundError)();
    }
    if (await (0, helpers_1.verifyUserBoard)(user_id, board_id)) {
        throw (0, errors_1.unauthorizedError)();
    }
    if (!user_id) {
        throw (0, errors_1.unauthorizedError)();
    }
    const warning = await warningRepository_1.warningRepositorie.create(user_id, board_id, text);
    return warning;
};
const getWarnings = async (board_id, user_id) => {
    if (await (0, helpers_1.verifyUserBoard)(user_id, board_id)) {
        throw (0, errors_1.unauthorizedError)();
    }
    const warnings = await warningRepository_1.warningRepositorie.getManyByBoardId(board_id);
    return warnings;
};
exports.warningService = {
    create,
    getWarnings
};

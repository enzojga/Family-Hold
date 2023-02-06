"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUserBoard = void 0;
const boardRepositorie_1 = require("../repositories/boardRepositorie");
const verifyUserBoard = async (user_id, board_id) => {
    const verifyUser = await boardRepositorie_1.boardRepositorie.getUserBoard(user_id, board_id);
    if (!verifyUser) {
        return true;
    }
    return false;
};
exports.verifyUserBoard = verifyUserBoard;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagesService = void 0;
const errors_1 = require("../errors/errors");
const messagesRepositorie_1 = require("../repositories/messagesRepositorie");
const helpers_1 = require("./helpers");
const sendMessage = async (user_id, board_id, message) => {
    if (await (0, helpers_1.verifyUserBoard)(user_id, board_id)) {
        throw (0, errors_1.unauthorizedError)();
    }
    await messagesRepositorie_1.messagesRepositorie.create(user_id, board_id, message);
    return;
};
const getMessages = async (user_id, board_id) => {
    if (await (0, helpers_1.verifyUserBoard)(user_id, board_id)) {
        throw (0, errors_1.unauthorizedError)();
    }
    const messages = await messagesRepositorie_1.messagesRepositorie.findMany(board_id);
    return messages;
};
exports.messagesService = {
    sendMessage,
    getMessages
};

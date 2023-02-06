"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessages = exports.sendMessage = void 0;
const messagesService_1 = require("../services/messagesService");
const http_status_1 = __importDefault(require("http-status"));
const sendMessage = async (req, res) => {
    const { message } = req.body;
    const boardId = Number(req.params.boardId);
    try {
        await messagesService_1.messagesService.sendMessage(req.userId, boardId, message);
        return res.sendStatus(http_status_1.default.CREATED);
    }
    catch (err) {
        return res.sendStatus(http_status_1.default.UNAUTHORIZED);
    }
};
exports.sendMessage = sendMessage;
const getMessages = async (req, res) => {
    const boardId = Number(req.params.boardId);
    try {
        const messages = await messagesService_1.messagesService.getMessages(req.userId, boardId);
        return res.status(http_status_1.default.OK).send(messages);
    }
    catch (err) {
        return res.sendStatus(http_status_1.default.UNAUTHORIZED);
    }
};
exports.getMessages = getMessages;

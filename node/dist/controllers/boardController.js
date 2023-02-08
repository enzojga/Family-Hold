"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinBoard = exports.quitBoard = exports.getBoards = exports.createBoard = void 0;
const http_status_1 = __importDefault(require("http-status"));
const boardService_1 = require("../services/boardService");
const createBoard = async (req, res) => {
    const { name, icon, invite } = req.body;
    try {
        const board = await boardService_1.boardService.create(req.userId, name, icon, invite);
        return res.status(http_status_1.default.CREATED).send(board);
    }
    catch (err) {
        console.log(err);
        if (err.name === "ConflictError") {
            return res.sendStatus(http_status_1.default.CONFLICT);
        }
        return res.sendStatus(http_status_1.default.UNAUTHORIZED);
    }
};
exports.createBoard = createBoard;
const getBoards = async (req, res) => {
    try {
        const boards = await boardService_1.boardService.getBoardsByUserId(req.userId);
        return res.status(http_status_1.default.OK).send(boards);
    }
    catch (err) {
        console.log(err);
        return res.sendStatus(http_status_1.default.UNAUTHORIZED);
    }
};
exports.getBoards = getBoards;
const quitBoard = async (req, res) => {
    const boardId = Number(req.params.boardId);
    try {
        await boardService_1.boardService.quiBoard(req.userId, boardId);
        return res.sendStatus(http_status_1.default.NO_CONTENT);
    }
    catch (err) {
        if (err.name === "NotFoundError") {
            return res.sendStatus(http_status_1.default.NOT_FOUND);
        }
        return res.sendStatus(http_status_1.default.UNAUTHORIZED);
    }
};
exports.quitBoard = quitBoard;
const joinBoard = async (req, res) => {
    const { invite } = req.body;
    try {
        const joinInfo = await boardService_1.boardService.joinBoard(req.userId, invite);
        return res.status(http_status_1.default.OK).send(joinInfo);
    }
    catch (err) {
        console.log(err);
        if (err.name === "ConflictError") {
            return res.sendStatus(http_status_1.default.CONFLICT);
        }
        res.sendStatus(http_status_1.default.NOT_FOUND);
    }
};
exports.joinBoard = joinBoard;

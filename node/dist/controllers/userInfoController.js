"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserInforFromBoardId = exports.upsertUserInfo = void 0;
const userInfoService_1 = require("../services/userInfoService");
const http_status_1 = __importDefault(require("http-status"));
const upsertUserInfo = async (req, res) => {
    const { picture, nickname, status } = req.body;
    const boardId = Number(req.params.boardId);
    try {
        await userInfoService_1.userInfoService.upsert(boardId, req.userId, picture, nickname, status);
        return res.sendStatus(http_status_1.default.OK);
    }
    catch (err) {
        return res.sendStatus(http_status_1.default.UNAUTHORIZED);
    }
};
exports.upsertUserInfo = upsertUserInfo;
const getUserInforFromBoardId = async (req, res) => {
    const boardId = Number(req.params.boardId);
    try {
        const infos = await userInfoService_1.userInfoService.getManyUserInfo(req.userId, boardId);
        return res.status(http_status_1.default.OK).send(infos);
    }
    catch (err) {
        return res.sendStatus(http_status_1.default.UNAUTHORIZED);
    }
};
exports.getUserInforFromBoardId = getUserInforFromBoardId;

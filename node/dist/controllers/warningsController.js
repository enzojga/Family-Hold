"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoardWarnings = exports.createWarning = void 0;
const warningService_1 = require("../services/warningService");
const http_status_1 = __importDefault(require("http-status"));
const createWarning = async (req, res) => {
    const { text } = req.body;
    const boardId = Number(req.params.boardId);
    try {
        await warningService_1.warningService.create(req.userId, boardId, text);
        return res.sendStatus(http_status_1.default.CREATED);
    }
    catch (err) {
        if (err.name === "NotFoundError") {
            return res.sendStatus(http_status_1.default.NOT_FOUND);
        }
        if (err.name === "UnauthorizedError") {
            return res.sendStatus(http_status_1.default.UNAUTHORIZED);
        }
        return res.sendStatus(http_status_1.default.FORBIDDEN);
    }
};
exports.createWarning = createWarning;
const getBoardWarnings = async (req, res) => {
    const boardId = Number(req.params.boardId);
    try {
        const warnings = await warningService_1.warningService.getWarnings(boardId, req.userId);
        return res.status(http_status_1.default.OK).send(warnings);
    }
    catch (err) {
        return res.sendStatus(http_status_1.default.UNAUTHORIZED);
    }
};
exports.getBoardWarnings = getBoardWarnings;

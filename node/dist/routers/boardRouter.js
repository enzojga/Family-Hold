"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const boardController_1 = require("../controllers/boardController");
const express_1 = require("express");
const validation_middleware_1 = require("../middlewares/validation-middleware");
const autenticationMiddleware_1 = require("../middlewares/autenticationMiddleware");
const boardSchema_1 = require("../schemas/boardSchema");
const warningRouter_1 = __importDefault(require("./warningRouter"));
const messagesRouter_1 = __importDefault(require("./messagesRouter"));
const userInfoRouter_1 = __importDefault(require("./userInfoRouter"));
const taskRouter_1 = __importDefault(require("./taskRouter"));
const boardRouter = (0, express_1.Router)();
boardRouter.use(autenticationMiddleware_1.authenticateToken);
boardRouter.post("/", (0, validation_middleware_1.validateBody)(boardSchema_1.boardSchema), boardController_1.createBoard);
boardRouter.get("/", boardController_1.getBoards);
boardRouter.delete("/:boardId", (0, validation_middleware_1.validateParams)(boardSchema_1.boardParamsSchema), boardController_1.quitBoard);
boardRouter.post("/join", (0, validation_middleware_1.validateBody)(boardSchema_1.boardInviteBody), boardController_1.joinBoard);
boardRouter.use("/warning", warningRouter_1.default);
boardRouter.use("/message", messagesRouter_1.default);
boardRouter.use("/info", userInfoRouter_1.default);
boardRouter.use("/task", taskRouter_1.default);
exports.default = boardRouter;

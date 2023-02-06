import { createBoard, getBoards, joinBoard, quitBoard } from "../controllers/boardController";
import { Router } from "express";
import { validateBody, validateParams } from "../middlewares/validation-middleware";
import { authenticateToken } from "../middlewares/autenticationMiddleware";
import { boardInviteBody, boardParamsSchema, boardSchema } from "../schemas/boardSchema";
import warningRouter from "./warningRouter";
import messagesRouter from "./messagesRouter";
import userInfoRouter from "./userInfoRouter";
import taskRouter from "./taskRouter";

const boardRouter = Router();

boardRouter.use(authenticateToken);

boardRouter.post("/", validateBody(boardSchema), createBoard);
boardRouter.get("/", getBoards);
boardRouter.delete("/:boardId", validateParams(boardParamsSchema), quitBoard);
boardRouter.post("/join", validateBody(boardInviteBody), joinBoard);

boardRouter.use("/warning", warningRouter);
boardRouter.use("/message", messagesRouter);
boardRouter.use("/info", userInfoRouter);
boardRouter.use("/task", taskRouter);

export default boardRouter;
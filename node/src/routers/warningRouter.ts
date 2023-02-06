import { createWarning, getBoardWarnings } from "../controllers/warningsController";
import { Router } from "express";
import { validateBody, validateParams } from "../middlewares/validation-middleware";
import { warningBodySchema, warningParamsSchema } from "../schemas/warningSchema";

const warningRouter = Router();

warningRouter.post("/:boardId", validateBody(warningBodySchema), validateParams(warningParamsSchema), createWarning);
warningRouter.get("/:boardId", validateParams(warningParamsSchema), getBoardWarnings);

export default warningRouter;
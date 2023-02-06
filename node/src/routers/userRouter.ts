import { signIn, signUp } from "../controllers/usersController";
import { Router } from "express";
import { validateBody } from "../middlewares/validation-middleware";
import { userSchema } from "../schemas/userSchema";

const userRouter = Router();

userRouter.post("/signup", validateBody(userSchema), signUp);
userRouter.post("/signin", validateBody(userSchema), signIn);

export default userRouter;
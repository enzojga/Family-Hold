import express, { json } from 'express';
import boardRouter from './routers/boardRouter';
import userRouter from './routers/userRouter';
import cors from "cors";

const server = express();
server.use(cors());
server.use(json());
server.use(userRouter);
server.use("/board", boardRouter);


const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
let prisma;
const connectPrisma = () => {
    try {
        prisma = new client_1.PrismaClient();
    }
    catch (err) {
        console.log(err);
    }
};
connectPrisma();
exports.default = prisma;

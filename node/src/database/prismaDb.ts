import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

const connectPrisma = () => {
    try{
        prisma = new PrismaClient();
    } catch ( err ) {
        console.log(err);
    }
}

connectPrisma();

export default prisma;
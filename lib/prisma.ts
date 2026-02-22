import { PrismaClient } from "@prisma/client/extension";

const globalForPrisma = globalThis as unknown as {
    prisma : PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? PrismaClient()

if(process.env.NODE_ENV === 'production') {
    globalForPrisma.prisma = prisma;
}
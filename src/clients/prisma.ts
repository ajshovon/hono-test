import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: [ 'error', 'warn'],
    errorFormat: 'pretty'
});

export default prisma;
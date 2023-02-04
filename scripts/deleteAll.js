import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function deleteAll(){
    await prisma.item.deleteMany({})
    await prisma.category.deleteMany({})
    // await prisma.itemsInWarehouse.deleteMany({})
    await prisma.warehouse.deleteMany({})
}

deleteAll()
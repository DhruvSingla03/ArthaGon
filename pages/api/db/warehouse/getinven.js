import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";


const prisma = new PrismaClient()


export default async (req,res)=> {
    
    const data = req.body;
    console.log(data.warehouseId);
    
    try {
        
            const result = await prisma.item.findMany({
                where: {
                    warehouseid:data.warehouseid
                }
            })
            res.status(200).json(result)
        
    }
    catch (err) {
        console.log(err);
        
    }
    
}
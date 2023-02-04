/* eslint-disable import/no-anonymous-default-export */
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";


const prisma = new PrismaClient()


export default async (req, res) => {
    
    const data = req.body;
    console.log(data,"this is data");
    
    try {
        const result = await prisma.warehouse.findMany({
            where: {
                User: {
                   email:data.email
                
                }
            }
        })
        res.status(200).json(result)
    }
    catch (err) {
        console.log(err);
        
    }
    
}
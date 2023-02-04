import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next/types";

const prisma = new PrismaClient()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
    
    try {
        const result = await prisma.user.update({
            where: {
                email:data.email                
            },
            data: {
                ...data
            }
        })
        res.status(200).json(result)
    }
    catch (err) {
        console.log(err);
        
    }

  }
  
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next/types";

const prisma = new PrismaClient()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
    console.log(data);
    
    try {
      const result = await prisma.item.create({
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
  
import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient()


export default async (req,res)=> {
    
    const data=req.body;
    
    try { 
        const result = await prisma.item.findMany({
            where: {
                user: {
                    email: data.email
                    
                }
            }
        })
        res.status(200).json(result)
    }
    catch (err) {
        console.log(err);
        
    }
    
}
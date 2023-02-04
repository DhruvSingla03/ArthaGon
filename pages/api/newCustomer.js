import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
export default async function handler(req, res) {
  const data = req.body;
    
  try {
    const user= await prisma.user.findFirst({
        where: {
            email:data.email
        }
    })
    const result = await prisma.user.update({
        where: {
            email:data.email                
        },
        data: {
            name: data.name,
            role:"customer",
            Customer: {
                create: {
                    name: data.name,
                    userId: user.id,
                    
                }
            }
        }
    })
    res.status(200).json(result)
}
catch (err) {
    console.log(err);
    
}
}
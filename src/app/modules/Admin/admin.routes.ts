import  Express,{Request, Response}  from "express";
import { PrismaClient } from "../../../../generated/prisma";

const router = Express.Router();

const prisma = new PrismaClient()

router.get("/", async(req : Request, res : Response) => {
  const result = await prisma.admin.findMany() 
  res.status(200).json({
    success : true,
    message : "Admin Data Fetched Successfully",
    data : result
  })     
})


export const adminRoutes = router;
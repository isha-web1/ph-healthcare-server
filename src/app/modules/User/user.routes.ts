import  Express, { Request, Response }  from "express";
import { userController } from "./user.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../generated/prisma";

const router = Express.Router();

router.post("/",auth(UserRole.ADMIN, UserRole.SUPER_ADMIN), userController.createAdmin)


export const UserRoutes = router;
import  Express, { Request, Response }  from "express";
import { userController } from "./user.controller";

const router = Express.Router();

router.post("/", userController.createAdmin)


export const userRoutes = router;
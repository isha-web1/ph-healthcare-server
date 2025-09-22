import  Express  from "express";
import { authController } from "./auth.controller";

const router = Express.Router();


router.post('/login', authController.loginUser)



export const AuthRoutes = router;
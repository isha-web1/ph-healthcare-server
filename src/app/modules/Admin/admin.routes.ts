import Express from "express";
import { adminController } from "./admin.controller";


const router = Express.Router();



router.get("/", adminController.getAllFromDb)


export const adminRoutes = router;
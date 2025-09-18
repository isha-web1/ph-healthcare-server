import Express from "express";
import { adminController } from "./admin.controller";


const router = Express.Router();



router.get("/", adminController.getAllFromDb)

router.get("/:id", adminController.getByIdFromDb)

router.patch("/:id", adminController.updateIntoDb)


export const adminRoutes = router;
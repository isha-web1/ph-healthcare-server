import Express from "express";
import { adminController } from "./admin.controller";


const router = Express.Router();



router.get("/", adminController.getAllFromDb)

router.get("/:id", adminController.getByIdFromDb)

router.patch("/:id", adminController.updateIntoDb)

router.delete("/:id", adminController.deleteFromDb)

router.delete("/soft/:id", adminController.softDeleteFromDb)


export const adminRoutes = router;
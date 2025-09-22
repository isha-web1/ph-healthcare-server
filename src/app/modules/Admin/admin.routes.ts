import Express from "express";
import { adminController } from "./admin.controller";
import validateRequest from "../../middlewares/validateRequest";
import { adminValidationSchemas } from "./admin.validations";


const router = Express.Router();



router.get("/", adminController.getAllFromDb)

router.get("/:id", adminController.getByIdFromDb)

router.patch("/:id", validateRequest(adminValidationSchemas.update), adminController.updateIntoDb)

router.delete("/:id", adminController.deleteFromDb)

router.delete("/soft/:id", adminController.softDeleteFromDb)


export const AdminRoutes = router;
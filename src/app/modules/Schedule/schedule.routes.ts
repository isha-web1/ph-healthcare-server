import express from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../generated/prisma";
import { ScheduleController } from "./schedule.controller";

const router = express.Router();



router.get(
    '/',
    auth(UserRole.DOCTOR),
    ScheduleController.getAllFromDB
);


router.post(
    '/',
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
    ScheduleController.insertIntoDB
);










export const ScheduleRoutes = router;
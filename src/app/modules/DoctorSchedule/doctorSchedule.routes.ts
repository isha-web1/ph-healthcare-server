import express from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../generated/prisma";
import validateRequest from "../../middlewares/validateRequest";
import { DoctorScheduleValidation } from "./doctorSchedule.validation";
import { DoctorScheduleController } from "./doctorSchedule.controller";


const router = express.Router();

router.post(
    '/',
    auth(UserRole.DOCTOR),
    validateRequest(DoctorScheduleValidation.create),
    DoctorScheduleController.insertIntoDB
);





export const DoctorScheduleRoutes = router;
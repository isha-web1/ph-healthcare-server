import express from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../generated/prisma";
import validateRequest from "../../middlewares/validateRequest";
import { AppointmentValidation } from "./appointment.validation";
import { AppointmentController } from "./appointment.controller";




const router = express.Router();


router.get(
    '/',
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
    AppointmentController.getAllFromDB
);


router.get(
    '/my-appointment',
    auth(UserRole.PATIENT, UserRole.DOCTOR),
    AppointmentController.getMyAppointment
)


router.post(
    '/',
    auth(UserRole.PATIENT),
     validateRequest(AppointmentValidation.createAppointment),
    AppointmentController.createAppointment
);



export const AppointmentRoutes = router;
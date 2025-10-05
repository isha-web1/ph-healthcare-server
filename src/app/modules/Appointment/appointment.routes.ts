import express from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../generated/prisma";
import validateRequest from "../../middlewares/validateRequest";
import { AppointmentController } from "./appointment.controller";
import { AppointmentValidation } from "./appointment.validation";


const router = express.Router();


router.post(
    '/',
    auth(UserRole.PATIENT),
     validateRequest(AppointmentValidation.createAppointment),
    AppointmentController.createAppointment
);



export const AppointmentRoutes = router;
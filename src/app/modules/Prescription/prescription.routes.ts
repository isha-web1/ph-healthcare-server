import express from 'express';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../generated/prisma';
import { PrescriptionController } from './prescription.controller';
import validateRequest from '../../middlewares/validateRequest';
import { PrescriptionValidation } from './prescription.validation';


const router = express.Router();



router.get(
    '/my-prescription',
    auth(UserRole.PATIENT),
    PrescriptionController.patientPrescription
)


router.post(
    '/',
    auth(UserRole.DOCTOR),
    validateRequest(PrescriptionValidation.create),
    PrescriptionController.insertIntoDB
)

export const PrescriptionRoutes = router;
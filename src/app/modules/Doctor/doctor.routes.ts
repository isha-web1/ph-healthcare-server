import express from 'express';
import { DoctorController } from './doctor.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../generated/prisma';
import validateRequest from '../../middlewares/validateRequest';
import { DoctorValidation } from './doctor.validation';


const router = express.Router();

router.get('/', DoctorController.getAllFromDB);

router.get('/:id', DoctorController.getByIdFromDB);


router.patch(
    '/:id',
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.DOCTOR),
    validateRequest(DoctorValidation.update),
    DoctorController.updateIntoDB
);



export const DoctorRoutes = router;
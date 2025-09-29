import express from 'express';
import { DoctorController } from './doctor.controller';


const router = express.Router();

router.get('/', DoctorController.getAllFromDB);

router.get('/:id', DoctorController.getByIdFromDB);



export const DoctorRoutes = router;
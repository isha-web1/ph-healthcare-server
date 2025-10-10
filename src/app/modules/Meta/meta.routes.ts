import express from 'express';
import { MetaController } from './meta.controller';
import { UserRole } from '../../../../generated/prisma';
import auth from '../../middlewares/auth';



const router = express.Router();

router.get(
    '/',
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT),
    MetaController.fetchDashboardMetaData
)


export const MetaRoutes = router;
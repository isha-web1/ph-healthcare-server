import  Express  from "express";
import { authController } from "./auth.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../generated/prisma";

const router = Express.Router();


router.post('/login', authController.loginUser)

router.post('/refresh-token', authController.refreshToken)


router.post(
    '/change-password',
    auth(
        UserRole.SUPER_ADMIN,
        UserRole.ADMIN,
        UserRole.DOCTOR,
        UserRole.PATIENT
    ),
    authController.changePassword
);

router.post(
    '/forgot-password',
    authController.forgotPassword
);


router.post(
    '/reset-password',
    authController.resetPassword
)



export const AuthRoutes = router;
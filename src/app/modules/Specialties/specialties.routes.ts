import express,{Request, Response, NextFunction} from 'express'
import { fileUploader } from '../../../helpers/fileUploader';
import { SpecialtiesValidation } from './specialties.validation';
import { SpecialtiesController } from './specialties.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../generated/prisma';

const router = express.Router()


router.get(
    '/',
    SpecialtiesController.getAllFromDB
);


router.post(
    '/',
    fileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = SpecialtiesValidation.create.parse(JSON.parse(req.body.data))
        return SpecialtiesController.insertIntoDB(req, res, next)
    }
);



router.delete(
    '/:id',
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
    SpecialtiesController.deleteFromDB
);


export const SpecialtiesRoutes = router;
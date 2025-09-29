import express,{Request, Response, NextFunction} from 'express'
import { fileUploader } from '../../../helpers/fileUploader';
import { SpecialtiesValidation } from './specialties.validation';
import { SpecialtiesController } from './specialties.controller';

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


export const SpecialtiesRoutes = router;
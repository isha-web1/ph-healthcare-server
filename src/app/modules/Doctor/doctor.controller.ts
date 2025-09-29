import catchAsync from "../../../shared/catchAsync";
import { Request, Response } from "express";
import { doctorFilterableFields } from "./doctor.constant";
import pick from "../../../shared/pick";
import { DoctorService } from "./doctor.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";



const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, doctorFilterableFields);

    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

    const result = await DoctorService.getAllFromDB(filters, options);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Doctors retrieval successfully',
        meta: result.meta,
        data: result.data,
    });
});


const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
        throw new Error("Doctor id is required in params");
    }
    const result = await DoctorService.getByIdFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Doctor retrieval successfully',
        data: result,
    });
});




export const DoctorController = {
    getAllFromDB,
    getByIdFromDB
}
import catchAsync from "../../../shared/catchAsync";
import { Request, Response } from "express";
import pick from "../../../shared/pick";
import { patientFilterableFields } from "./patient.constants";
import { PatientService } from "./patient.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";




const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, patientFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await PatientService.getAllFromDB(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Patient retrieval successfully',
    meta: result.meta,
    data: result.data,
  });
});


const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {

  const { id } = req.params;

  if (!id) {
        throw new Error("Patient id is required in params");
    }

  const result = await PatientService.getByIdFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Patient retrieval successfully',
    data: result,
  });
});





const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
    if (!id) {
        throw new Error("Patient id is required in params");
    }
  const result = await PatientService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Patient deleted successfully',
    data: result,
  });
});


const softDelete = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

    if (!id) {
        throw new Error("Patient id is required in params");
    }

  const result = await PatientService.softDelete(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Patient soft deleted successfully',
    data: result,
  });
});


export const PatientController = {
  getAllFromDB,
    getByIdFromDB,
    deleteFromDB,
    softDelete
};
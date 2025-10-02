import catchAsync from "../../../shared/catchAsync";
import { Request, Response } from "express";
import { IAuthUser } from "../../interfaces/common";
import { DoctorScheduleService } from "./doctorSchedule.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";




const insertIntoDB = catchAsync(async (req: Request & { user?: IAuthUser }, res: Response) => {

    const user = req.user;
    const result = await DoctorScheduleService.insertIntoDB(user, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Doctor Schedule created successfully!",
        data: result
    });
});






export const DoctorScheduleController = {
    insertIntoDB
};
import catchAsync from "../../../shared/catchAsync";
import { Request, Response } from "express";
import { ScheduleService } from "./schedule.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";



const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
    const result = await ScheduleService.insertIntoDB(req.body);
   

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Schedule created successfully!",
        data: result
    });
});



export const ScheduleController = {
    insertIntoDB
};
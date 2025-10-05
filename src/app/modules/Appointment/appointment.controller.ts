import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IAuthUser } from "../../interfaces/common";
import { AppointmentService } from "./appointment.service";
import { Request, Response } from "express";
import httpStatus from "http-status";





const createAppointment = catchAsync(async (req: Request & { user?: IAuthUser }, res: Response) => {

    const user = req.user;

    const result = await AppointmentService.createAppointment(user as IAuthUser, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Appointment booked successfully!",
        data: result
    })
});






export const AppointmentController = {
    createAppointment
}
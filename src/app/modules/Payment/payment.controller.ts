import catchAsync from "../../../shared/catchAsync";
import { Request, Response } from "express";
import { PaymentService } from "./payment.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import ApiError from "../../errors/ApiError";




const initPayment = catchAsync(async (req: Request, res: Response) => {
    const { appointmentId } = req.params;

     if (!appointmentId) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Appointment ID is required in the route parameters.');
    }

    const result = await PaymentService.initPayment(appointmentId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment initiate successfully',
        data: result,
    });
});



const validatePayment = catchAsync(async (req: Request, res: Response) => {
    const result = await PaymentService.validatePayment(req.query);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment validate successfully',
        data: result,
    });
});








export const PaymentController = {
    initPayment,
    validatePayment
};
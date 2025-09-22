import { Request,  Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { authServices } from "./auth.service";
import sendResponse from "../../../shared/sendResponse";



const loginUser = catchAsync(async(req : Request, res : Response) => {
    const result = await authServices.loginUser(req.body)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "User logged in successfully!",
        data: result
    })
})


export const authController = {
    loginUser
}
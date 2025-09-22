import { Request,  Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { authServices } from "./auth.service";
import sendResponse from "../../../shared/sendResponse";



const loginUser = catchAsync(async(req : Request, res : Response) => {
    const result = await authServices.loginUser(req.body)

     const { refreshToken } = result;

    res.cookie('refreshToken', refreshToken, {
        secure: false,
        httpOnly: true
    });

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "User logged in successfully!",
        data: {
            accessToken: result.accessToken,
            needPasswordChange: result.needPasswordChange
        }
    })
})


export const authController = {
    loginUser
}
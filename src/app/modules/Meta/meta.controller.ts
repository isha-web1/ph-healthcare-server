import catchAsync from "../../../shared/catchAsync";
import { Request, Response } from "express";
import { IAuthUser } from "../../interfaces/common";
import { MetaService } from "./meta.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";


const fetchDashboardMetaData = catchAsync(async (req: Request & { user?: IAuthUser }, res: Response) => {

    const user = req.user;
    const result = await MetaService.fetchDashboardMetaData(user as IAuthUser);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Meta data retrieval successfully!",
        data: result
    })
});

export const MetaController = {
    fetchDashboardMetaData
}
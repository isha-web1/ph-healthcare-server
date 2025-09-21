import { Request, Response } from "express";
import { adminService } from "./admin.service";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const getAllFromDb = async (req: Request, res: Response) => {
  
   const filters = pick(req.query, adminFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder'])
    console.log(options)
    const result = await adminService.getAllFromDb(filters, options)
    
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Admin data fetched!",
        meta: result.meta,
        data: result.data
    })
}


const getByIdFromDb = async (req: Request, res: Response) =>{
  const { id } = req.params;
  
    const result = await adminService.getByIdFromDb(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Admin data fetched by id!",
        data: result
    });
  
 
}



const updateIntoDb = async (req: Request, res: Response) =>{
  const { id } = req.params;
  
    const result = await adminService.updateIntoDb( id, req.body)
   sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Admin data updated!",
        data: result
    })
  
 
}



const deleteFromDb = async (req: Request, res: Response) =>{
  const { id } = req.params;
  
    const result = await adminService.deleteFromDb(id )
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Admin data deleted!",
        data: result
    })
  
}


const softDeleteFromDb = async (req: Request, res: Response) =>{
  const { id } = req.params;
  
    const result = await adminService.deleteFromDb(id)
     sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Admin data deleted!",
        data: result
    })

  
}
export const adminController = {
  getAllFromDb,
  getByIdFromDb,
  updateIntoDb,
  deleteFromDb,
  softDeleteFromDb
};

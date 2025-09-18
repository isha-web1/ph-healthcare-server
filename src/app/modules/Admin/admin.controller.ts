import { Request, Response } from "express";
import { adminService } from "./admin.service";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";

const getAllFromDb = async (req: Request, res: Response) => {
  try {
   const filters = pick(req.query, adminFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder'])
    console.log(options)
    const result = await adminService.getAllFromDb(filters, options)
    res.status(200).json({
      success: true,
      message: "Admin Data Fetched Successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch admin data",
      error: err,
    });
  }
};


const getByIdFromDb = async (req: Request, res: Response) =>{
  const { id } = req.params;
  try{
    const result = await adminService.getByIdFromDb(id)
    res.status(200).json({
      success: true,
      message: "single Admin Data Fetched Successfully",
      data: result,
    });
  }
  catch(err){
    res.status(500).json({
      success: false,
      message: "Failed to fetch admin data",
      error: err,
    });
  }
}



const updateIntoDb = async (req: Request, res: Response) =>{
  const { id } = req.params;
  try{
    const result = await adminService.updateIntoDb( id, req.body)
    res.status(200).json({
      success: true,
      message: " Admin Data updated Successfully",
      data: result,
    });
  }
  catch(err){
    res.status(500).json({
      success: false,
      message: "Failed to fetch admin data",
      error: err,
    });
  }
}
export const adminController = {
  getAllFromDb,
  getByIdFromDb,
  updateIntoDb
};

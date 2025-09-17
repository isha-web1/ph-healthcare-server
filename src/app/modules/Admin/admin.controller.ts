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
      error: err?.message,
    });
  }
};

export const adminController = {
  getAllFromDb,
};

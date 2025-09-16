import { Request, Response } from "express";
import { adminService } from "./admin.service";

const getAllFromDb = async (req: Request, res: Response) => {
  try {
    const result = await adminService.getAllFromDb(req.query);
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

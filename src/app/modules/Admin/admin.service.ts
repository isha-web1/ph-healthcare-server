import { paginationHelper } from "../../../helpers/paginationHelper";
import { IPaginationOptions } from "../../interfaces/pagination";
import { adminSearchAbleFields } from "./admin.constant";
import { IAdminFilterRequest } from "./admin.interface";
import prisma from "../../../shared/prisma";
import { Admin, Prisma } from "../../../../generated/prisma";



const getAllFromDb = async (params: IAdminFilterRequest, options: IPaginationOptions) => {
    const { page, limit, skip } = paginationHelper.calculatePagination(options);
    const { searchTerm, ...filterData } = params;

    const andCondions: Prisma.AdminWhereInput[] = [];

    //console.log(filterData);
    if (params.searchTerm) {
        andCondions.push({
            OR: adminSearchAbleFields.map(field => ({
                [field]: {
                    contains: params.searchTerm,
                    mode: 'insensitive'
                }
            }))
        })
    };

    if (Object.keys(filterData).length > 0) {
        andCondions.push({
            AND: Object.keys(filterData).map(key => ({
                [key]: {
                    equals: (filterData as any)[key]
                }
            }))
        })
    };

    andCondions.push({
        isDeleted: false
    })

    //console.dir(andCondions, { depth: 'inifinity' })
    const whereConditons: Prisma.AdminWhereInput = { AND: andCondions }

    const result = await prisma.admin.findMany({
        where: whereConditons,
        skip,
        take: limit,
        orderBy: options.sortBy && options.sortOrder ? {
            [options.sortBy]: options.sortOrder
        } : {
            createdAt: 'desc'
        }
    });

    const total = await prisma.admin.count({
        where: whereConditons
    });

    return {
        meta: {
            page,
            limit,
            total
        },
        data: result
    };
};


const getByIdFromDb = async (id : string) => {
    const result = await prisma.admin.findUnique({
        where: {
            id: id
        }
    })
       
return result;
}


const updateIntoDb = async (id : string, data : Partial<Admin>) => {

    const result = await prisma.admin.update({
        where: {
            id: id
        },
        data: data
    })

    return result;
}

export const adminService = {
  getAllFromDb,
    getByIdFromDb,
    updateIntoDb
};

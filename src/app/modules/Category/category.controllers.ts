import { NextFunction, Request, Response } from "express";
import httpStatus from 'http-status-codes'
import Async_Catch from "../../utils/try.code";
import { Category_Services } from "./category.services";


const Create_Category_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Category_Services.Create_Category_Service(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Create A Category",
        data: result
    })
})

const Update_Category_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Category_Services.Update_Category_Service(req.body, req.params.cid);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Update A Category",
        data: result
    })
})

const Delete_Category_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Category_Services.Delete_Category_Service(req.params.cid);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Delete A Category",
        data: result
    })
})

const Get_All_Category_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Category_Services.Get_All_Category_Service();

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Get All Category",
        data: result
    })
})

const Get_One_Category_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Category_Services.Get_One_Category_Service(req.params.cid);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Get One Category",
        data: result
    })
})


export const Category_Controller = {
    Create_Category_Controller,
    Update_Category_Controller,
    Delete_Category_Controller,
    Get_All_Category_Controller,
    Get_One_Category_Controller

}
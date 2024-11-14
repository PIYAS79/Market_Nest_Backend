import { NextFunction, Request, Response } from "express";
import httpStatus from 'http-status-codes'
import Async_Catch from "../../utils/try.code";
import { Product_Services } from "./product.services";


const Create_Product_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Product_Services.Create_Product_Service(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Create A Product",
        data: result
    })
})

const Update_Product_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Product_Services.Update_Product_Service(req.body, req.params.pid);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Update A Product",
        data: result
    })
})

const Delete_Product_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Product_Services.Delete_Product_Service(req.params.pid);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Delete A Product",
        data: result
    })
})

const Get_All_Product_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Product_Services.Get_All_Product_Service();

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Get All Products",
        data: result
    })
})

const Get_One_Product_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Product_Services.Get_One_Product_Service(req.params.pid);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Get One Product",
        data: result
    })
})


export const Product_Controller = {
    Create_Product_Controller,
    Update_Product_Controller,
    Delete_Product_Controller,
    Get_All_Product_Controller,
    Get_One_Product_Controller

}
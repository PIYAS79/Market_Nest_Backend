import { NextFunction, Request, Response } from "express";
import httpStatus from 'http-status-codes'
import Async_Catch from "../../utils/try.code";
import { Order_Services } from "./order.services";


const Create_Order_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Order_Services.Create_Order_Service(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Create A Order",
        data: result
    })
})

const Update_Order_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Order_Services.Update_Order_Service(req.body, req.params.oid);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Update A Order",
        data: result
    })
})

const Delete_Delete_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Order_Services.Delete_Order_Service(req.params.oid);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Delete A Order",
        data: result
    })
})

const Get_All_Order_Of_A_User_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Order_Services.Get_All_Order_Of_A_User_Service(req.params.uid);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Get All Orders",
        data: result
    })
})

const Get_One_Order_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await Order_Services.Get_One_Order_Service(req.params.oid);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Get One Order",
        data: result
    })
})


export const Order_Controller = {
    Create_Order_Controller,
    Update_Order_Controller,
    Delete_Delete_Controller,
    Get_All_Order_Of_A_User_Controller,
    Get_One_Order_Controller

}
import { NextFunction, Request, Response } from "express";
import httpStatus from 'http-status-codes'
import Async_Catch from "../../utils/try.code";
import { User_Services } from "./user.services";


const Create_User_Controller = Async_Catch(async(req:Request,res:Response,next:NextFunction)=>{

    const result = await User_Services.Create_User_Service(req.body);

    res.status(httpStatus.OK).json({
        success:true,
        message:"Successfully Create A User",
        data:result
    })
})

const Update_User_Controller = Async_Catch(async(req:Request,res:Response,next:NextFunction)=>{

    const result = await User_Services.Update_User_Service(req.body,req.params.uid);

    res.status(httpStatus.OK).json({
        success:true,
        message:"Successfully Update A User",
        data:result
    })
})

const Delete_User_Controller = Async_Catch(async(req:Request,res:Response,next:NextFunction)=>{

    const result = await User_Services.Delete_User_Service(req.params.uid);

    res.status(httpStatus.OK).json({
        success:true,
        message:"Successfully Delete A User",
        data:result
    })
})

const Get_All_User_Controller = Async_Catch(async(req:Request,res:Response,next:NextFunction)=>{

    const result = await User_Services.Get_All_User_Service();

    res.status(httpStatus.OK).json({
        success:true,
        message:"Successfully Get All User",
        data:result
    })
})

const Get_One_User_Controller = Async_Catch(async(req:Request,res:Response,next:NextFunction)=>{

    const result = await User_Services.Get_One_User_Service(req.params.uid);
    
    res.status(httpStatus.OK).json({
        success:true,
        message:"Successfully Get One User",
        data:result
    })
})


export const User_Controller = {
    Create_User_Controller,
    Update_User_Controller,
    Delete_User_Controller,
    Get_All_User_Controller,
    Get_One_User_Controller,

}
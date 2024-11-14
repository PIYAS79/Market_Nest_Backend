import { NextFunction, Request, Response } from "express";
import httpStatus from 'http-status-codes'
import Async_Catch from "../../utils/try.code";
import { Auth_Services } from "./auth.services";


const Login_User_Controller = Async_Catch(async(req:Request,res:Response,next:NextFunction)=>{

    const result = await Auth_Services.Login_Service(req.body);

    res.status(httpStatus.OK).json({
        success:true,
        message:"Successfully Login User",
        data:result
    })
})

const Make_Admin_Controller = Async_Catch(async(req:Request,res:Response,next:NextFunction)=>{

    const result = await Auth_Services.Make_Admin_Service(req.params.uid);

    res.status(httpStatus.OK).json({
        success:true,
        message:"Successfully Make A Admin",
        data:result
    })
})

const Dashboard_Overview_Controller = Async_Catch(async(req:Request,res:Response,next:NextFunction)=>{

    const result = await Auth_Services.Dashboard_Overview_Service();

    res.status(httpStatus.OK).json({
        success:true,
        message:"Successfully Get Dashboard Current Overview",
        data:result
    })
})


export const Auth_Controller = {
    Login_User_Controller,
    Make_Admin_Controller,
    Dashboard_Overview_Controller
}
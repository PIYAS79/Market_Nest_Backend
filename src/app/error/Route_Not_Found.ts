
import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status-codes'




const Route_Not_Found_Error = (req:Request,res:Response,next:NextFunction)=>{
    res.status(httpStatus.NOT_FOUND).json({
        success:false,
        message:"Route not found "
    })
}





export default Route_Not_Found_Error;
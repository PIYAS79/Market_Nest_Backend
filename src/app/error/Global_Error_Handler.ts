import { NextFunction, Request, Response } from "express"

import httpStatus from "http-status-codes"
import { ZodError, ZodIssue } from "zod"
import Final_App_Error from "./Final_App_Error"


export type Error_Source_Type = {
    path: string | number,
    message: string,
}[]



const Global_Error_Handler = (err: any, req: Request, res: Response, next: NextFunction) => {


    let Error_Title: string = "There is an server side error *"
    let Error_Source: Error_Source_Type = [
        {
            path: '',
            message: "There is an server side error *"
        }
    ]
    let Error_Status_Code = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;


    const Zod_Validation_Error = (err: ZodError) => {
        const err_title: string = "Validation Error - Zod *";
        const err_source: Error_Source_Type = err.issues.map((one: ZodIssue) => ({
            path: one.path[one.path.length - 1],
            message: one.message
        }))
        return { err_title, err_source };
    }



    if (err instanceof ZodError) {
        const gettedData = Zod_Validation_Error(err);
        Error_Title = gettedData.err_title;
        Error_Source = gettedData.err_source;
    } else if (err instanceof Final_App_Error) {
        Error_Title = err.message;
        Error_Source = [{
            path: '',
            message: err.message
        }]
    } else if (err instanceof Error) {
        Error_Title = err.message;
        Error_Source = [{
            path: '',
            message: err.message
        }]
    }



    res.status(Error_Status_Code).json({
        success: false,
        Error_Title,
        Error_Source,
        stack: err.stack,
        error: err
    })
}

export default Global_Error_Handler;
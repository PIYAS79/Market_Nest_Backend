
import "reflect-metadata"
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import httpStatus from 'http-status-codes';
import { createConnection } from 'typeorm'
import Route_Not_Found_Error from './error/Route_Not_Found';
import router from './routes';
import { User_Entity } from "./Entity/User_Entity";
import Global_Error_Handler from "./error/Global_Error_Handler";
import { Product_Entity } from "./Entity/Product_Entity";
import { Order_Entity } from "./Entity/Order_Entity";
import { Category_Entity } from "./Entity/Category_Entity";


const app = express();


app.use(express.json());
app.use(cors());


export const db_connection = createConnection({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "",
    database: "market_nest",
    synchronize: true,
    logging: false,
    entities: [User_Entity, Product_Entity, Order_Entity, Category_Entity]
}).then(() => {
    console.log("Databse connected successfully !");
}).catch((err) => {
    console.log(err);
})


// project route
app.use('/app/v1', router);




app.use('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.OK).json({
        success: true,
        message: "Market Nest Server is running 🤩"
    })
})



app.use("*", Route_Not_Found_Error);
app.use(Global_Error_Handler);



export default app;
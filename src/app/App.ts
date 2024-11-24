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
import config from "./config";

// create app by the express
const app = express();

// default middlewares
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));

// database connections
export const db_connection = createConnection({
    type: "mysql",
    host: config.DB_HOST as string,
    port: 3306,
    username: config.DB_USER as string,
    password: config.DB_PASSWORD as string,
    database: config.DB_NAME as string,
    synchronize: true,
    logging: false,
    entities: [User_Entity, Product_Entity, Order_Entity, Category_Entity]
}).then(() => {
    console.log("Databse connected successfully !");
}).catch((err) => {
    console.log(err);
})


// project routes
app.use('/app/v1', router);



// initial route
app.use('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.OK).json({
        success: true,
        message: "Market Nest Server is running 🤩"
    })
})



app.use("*", Route_Not_Found_Error);
app.use(Global_Error_Handler);



export default app;
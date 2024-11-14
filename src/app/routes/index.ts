


import express from 'express';
import { User_Routes } from '../modules/User/user.route';
import { Product_Routes } from '../modules/Product/product.route';
import { Order_Routes } from '../modules/Order/order.route';


const router = express.Router();



const project_routes = [
    {
        path: '/user',
        route: User_Routes
    },
    {
        path: '/product',
        route: Product_Routes
    },
    {
        path: '/order',
        route: Order_Routes
    }
]

project_routes.forEach((one) => router.use(one.path, one.route));


export default router;
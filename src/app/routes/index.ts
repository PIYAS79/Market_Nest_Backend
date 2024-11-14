


import express from 'express';
import { User_Routes } from '../modules/User/user.route';
import { Product_Routes } from '../modules/Product/product.route';
import { Order_Routes } from '../modules/Order/order.route';
import { Category_Routes } from '../modules/Category/category.route';
import { Auth_Routes } from '../modules/Auth/auth.router';


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
    },
    {
        path: '/category',
        route: Category_Routes
    },
    {
        path: '/auth',
        route: Auth_Routes
    }
]

project_routes.forEach((one) => router.use(one.path, one.route));


export default router;
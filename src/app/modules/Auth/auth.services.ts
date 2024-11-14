import { getManager } from "typeorm";
import { Login_Type } from "./auth.interface";
import { User_Entity } from "../../Entity/User_Entity";
import Final_App_Error from "../../error/Final_App_Error";
import httpStatus from 'http-status-codes';
import { Product_Entity } from "../../Entity/Product_Entity";
import { Order_Entity } from "../../Entity/Order_Entity";
import { Category_Entity } from "../../Entity/Category_Entity";


const Login_Service = async (data: Login_Type) => {

    const entityManager = getManager();
    const user = await entityManager.findOne(User_Entity, { where: { email: data.email } });
    if (!user) {
        throw new Final_App_Error(httpStatus.NOT_FOUND, "Email is not found in the database");
    }
    if (data.password !== user.password) {
        throw new Final_App_Error(httpStatus.FORBIDDEN, "Password is incorrect");
    }

    return user;
}

const Make_Admin_Service = async (uid: string) => {

    const entityManager = getManager();
    const user = await entityManager.findOne(User_Entity, { where: { user_id: Number(uid) } });
    if (!user) {
        throw new Final_App_Error(httpStatus.NOT_FOUND, "User not found");
    }
    const result = await entityManager.update(User_Entity, { user_id: Number(uid) }, { role: "ADMIN" });

    return result;
}

const Dashboard_Overview_Service = async () => {

    const entityManager = getManager();
    const users = await entityManager.count(User_Entity);
    const products = await entityManager.count(Product_Entity);
    const orders = await entityManager.count(Order_Entity);
    const categories = await entityManager.count(Category_Entity);

    return {
        total_user: users,
        total_product: products,
        total_order: orders,
        total_category: categories
    };
}




export const Auth_Services = {
    Login_Service,
    Make_Admin_Service,
    Dashboard_Overview_Service
}
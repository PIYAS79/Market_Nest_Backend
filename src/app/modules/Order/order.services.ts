import { getManager } from "typeorm";
import { Product_Entity } from "../../Entity/Product_Entity";
import { User_Entity } from "../../Entity/User_Entity";
import Final_App_Error from "../../error/Final_App_Error";
import httpStatus from 'http-status-codes';
import { Order_Entity } from "../../Entity/Order_Entity";
import { Get_Current_Date } from "../../utils/get_current_time";




const Create_Order_Service = async (data: Create_Order_Type) => {

    const entityManager = getManager();

    // find the user
    const user = await entityManager.findOne(User_Entity, { where: { user_id: data.user_id } });
    if (!user) {
        throw new Final_App_Error(httpStatus.NOT_FOUND, "User is not found");
    }
    // find the product
    const product = await entityManager.findOne(Product_Entity, { where: { product_id: data.product_id } });
    if (!product) {
        throw new Final_App_Error(httpStatus.NOT_FOUND, "Product is not found");
    }

    const newOrder = entityManager.insert(Order_Entity, {
        product: product,
        quantity: data.quantity,
        time: Get_Current_Date,
        user: user,
        user_id: data.user_id
    })

    return newOrder;
}

const Update_Order_Service = async (data: Partial<Create_Product_Type>, pid: string) => {

    const remainingProperties: Record<string, unknown> = { ...data };
    const entityManager = getManager();
    const result = await entityManager.update(Order_Entity, { order_id: pid }, remainingProperties);

    return result;
}

const Delete_Order_Service = async (pid: string) => {

    const entityManager = getManager();
    const result = await entityManager.delete(Order_Entity, { order_id: pid });

    return result;
}

const Get_All_Order_Of_A_User_Service = async (user_id: string) => {
    const entityManager = getManager();
    
    const result = await entityManager.find(Order_Entity,{where:{user_id:Number(user_id)}});

    return result;
};

const Get_One_Order_Service = async (pid: string) => {
    const entityManager = getManager();
    const result = await entityManager.findOne(Order_Entity, { where: { order_id: Number(pid) } })

    return result;
}



export const Order_Services = {
    Create_Order_Service,
    Update_Order_Service,
    Delete_Order_Service,
    Get_All_Order_Of_A_User_Service,
    Get_One_Order_Service
}
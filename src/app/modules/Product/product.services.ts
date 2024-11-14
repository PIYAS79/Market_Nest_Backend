import { getManager } from "typeorm";
import { Product_Entity } from "../../Entity/Product_Entity";




const Create_Product_Service = async (data: Create_Product_Type) => {

    const entityManager = getManager();
    // insert data to database 
    const newProduct = await entityManager.insert(Product_Entity, {
        name: data.name,
        image: data.image,
        description: data.description,
        price: data.price,
        category:data.category
    })

    return newProduct;
}

const Update_Product_Service = async (data: Partial<Create_Product_Type>, pid: string) => {

    const remainingProperties: Record<string, unknown> = { ...data };
    const entityManager = getManager();
    const result = await entityManager.update(Product_Entity, { product_id: pid }, remainingProperties);

    return result;
}

const Delete_Product_Service = async (pid: string) => {

    const entityManager = getManager();
    const result = await entityManager.delete(Product_Entity, { product_id: pid });

    return result;
}

const Get_All_Product_Service = async () => {
    const entityManager = getManager();
    const result = await entityManager.find(Product_Entity);

    return result;
}

const Get_One_Product_Service = async (pid: string) => {
    const entityManager = getManager();
    const result = await entityManager.findOne(Product_Entity, { where: { product_id: Number(pid) } })

    return result;
}



export const Product_Services = {
    Create_Product_Service,
    Update_Product_Service,
    Delete_Product_Service,
    Get_All_Product_Service,
    Get_One_Product_Service
}
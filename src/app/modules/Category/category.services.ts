import { getManager } from "typeorm";
import { Product_Entity } from "../../Entity/Product_Entity";
import { Category_Entity } from "../../Entity/Category_Entity";




const Create_Category_Service = async (data: Create_Category_Type) => {

    const entityManager = getManager();
    const newCategory = await entityManager.insert(Category_Entity, {
        name: data.category_name
    })

    return newCategory;
}

const Update_Category_Service = async (data: Partial<Create_Product_Type>, cid: string) => {

    const remainingProperties: Record<string, unknown> = { ...data };
    const entityManager = getManager();
    const result = await entityManager.update(Category_Entity, { category_id: cid }, remainingProperties);

    return result;
}

const Delete_Category_Service = async (cid: string) => {
    const entityManager = getManager();
    const result = await entityManager.delete(Category_Entity, { category_id: cid });

    return result;
}

const Get_All_Category_Service = async () => {
    const entityManager = getManager();
    const result = await entityManager.find(Category_Entity);

    return result;
}

const Get_One_Category_Service = async (cid: string) => {

    const entityManager = getManager();
    const result = await entityManager.findOne(Category_Entity, { where: { category_id: Number(cid) } })

    return result;
}



export const Category_Services = {
    Create_Category_Service,
    Delete_Category_Service,
    Update_Category_Service,
    Get_All_Category_Service,
    Get_One_Category_Service
}
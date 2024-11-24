import { getManager } from "typeorm";
import { User_Entity } from "../../Entity/User_Entity";
import Final_App_Error from "../../error/Final_App_Error";
import httpStatus from 'http-status-codes';


const Create_User_Service = async (data: Create_User_Type) => {

    const entityManager = getManager();
    // insert data to database 
    const newUser = await entityManager.insert(User_Entity, {
        name: data.name,
        image: data.image,
        email: data.email,
        password: data.password,
        role: "USER",
        address: data.address,
        contact_number: data.contact_number
    })

    return newUser;
}

const Update_User_Service = async (data: Partial<Create_User_Type>, uid: string) => {

    if (data.role === "ADMIN-X") {
        data.role = "ADMIN"
    }

    const remainingProperties: Record<string, unknown> = { ...data };
    const entityManager = getManager();

    const isUser = await entityManager.findOne(User_Entity, { where: { user_id: Number(uid) } });
    if (isUser?.role === "USER") {
        const result = await entityManager.update(User_Entity, { user_id: uid }, remainingProperties);
        return result;
    } else {
        const adminCount = await entityManager.find(User_Entity, { where: { role: "ADMIN" } });
        if (adminCount.length < 2) {
            if (adminCount[0].role === "ADMIN") {
                throw new Final_App_Error(httpStatus.BAD_REQUEST, "There sould be minimum one admin in the system *");
            }
        } else {
            const adminResult = await entityManager.update(User_Entity, { user_id: uid }, remainingProperties)
            return adminResult;
        }
    }
}

const Delete_User_Service = async (uid: string) => {

    const entityManager = getManager();
    const result = await entityManager.delete(User_Entity, { user_id: uid });

    return result;
}

const Get_All_User_Service = async () => {
    const entityManager = getManager();
    const result = await entityManager.find(User_Entity);

    return result;
}

const Get_One_User_Service = async (uid: string) => {
    const entityManager = getManager();
    const result = await entityManager.findOne(User_Entity, { where: { user_id: Number(uid) } })

    return result;
}



export const User_Services = {
    Create_User_Service,
    Update_User_Service,
    Delete_User_Service,
    Get_All_User_Service,
    Get_One_User_Service,

}
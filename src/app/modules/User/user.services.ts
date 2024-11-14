import { getManager } from "typeorm";
import { User_Entity } from "../../Entity/User_Entity";


const Create_User_Service = async (data: Create_User_Type) => {

    const entityManager = getManager();
    // insert data to database 
    const newUser = await entityManager.insert(User_Entity, {
        name: data.name,
        image: data.image,
        email: data.email,
        password: data.password,
        role: "USER",

    })

    return newUser;
}

const Update_User_Service = async (data: Partial<Create_User_Type>, uid: string) => {

    if (data.role) {
        data.role = "USER"
    }

    const remainingProperties: Record<string, unknown> = { ...data };
    const entityManager = getManager();
    const result = await entityManager.update(User_Entity, { user_id: uid }, remainingProperties);

    return result;
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
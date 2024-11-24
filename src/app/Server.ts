
import { getManager } from 'typeorm';
import app, { db_connection } from './App';
import { Server } from 'http';
import { User_Entity } from './Entity/User_Entity';


const port = 5022;
let server: Server;

async function main() {

    try {
        // default super admin instance
        await db_connection;
        const entityManager = getManager();
        const isAdminExist = await entityManager.findOne(User_Entity, { where: { role: "ADMIN" } });
        if (!isAdminExist) {
            await entityManager.insert(User_Entity, {
                email: "super@gmail.com",
                image: "https://www.metroworldnews.com.br/resizer/v2/44V5ZRVUOBBVXAMIRQBBEEI6TI.webp?smart=true&auth=328e8b61a04d63aa85c79a187bab82f8c7096b5857d7c94d7a1c56f73571eaa9&width=1200&height=630",
                name: "Jannatul Ferdaus Sumaiya",
                password: "blackops",
                role: "ADMIN"
            })
        }
        // server listen code
        server = app.listen(port, () => {
            console.log(`Server run on http://localhost:${port}`);
        })

    } catch (err: any) {
        console.log(err);
    }
}

main();
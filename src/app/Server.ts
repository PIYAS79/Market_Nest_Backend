
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
                email: "sumaiya@gmail.com",
                image: "https://static.vecteezy.com/system/resources/thumbnails/008/974/656/small_2x/cute-kid-girl-holding-bubble-milk-tea-hand-drawn-cartoon-character-illustration-vector.jpg",
                name: "Jannatul Ferdaus Sumaiya",
                password: "222156423",
                role: "ADMIN",
                address:"Dhaka, Bangladesh",
                contact_number:"0123654789",
                
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
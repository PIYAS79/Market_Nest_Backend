
import app from './App';

import {Server} from 'http';


const port = 5022;

let server:Server;

function main(){
    server = app.listen(port,()=>{
        console.log(`Server run on http://localhost:${port}`);
    })
}


main();
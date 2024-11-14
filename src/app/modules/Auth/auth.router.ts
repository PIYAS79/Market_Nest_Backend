

import express from 'express';
import { Auth_Controller } from './auth.controllers';
import Zod_Validation_Request from '../../middlewares/Validation_Request';
import { Login_Zod_Type } from './auth.zod';


const router = express.Router();



// login user route 
router.post('/login', Zod_Validation_Request(Login_Zod_Type), Auth_Controller.Login_User_Controller);
// make admin route
router.patch('/admin/:uid', Auth_Controller.Make_Admin_Controller);
// dashboard overview route
router.get('/dashboard', Auth_Controller.Dashboard_Overview_Controller);



export const Auth_Routes = router;
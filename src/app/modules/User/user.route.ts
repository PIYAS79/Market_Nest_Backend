

import express from 'express';
import { User_Controller } from './user.controllers';
import Zod_Validation_Request from '../../middlewares/Validation_Request';
import { Update_User_Zod_Type, User_Zod_Type } from './user.zod';



const router = express.Router();

// create a new user route
router.post('/', Zod_Validation_Request(User_Zod_Type), User_Controller.Create_User_Controller);
// update a user route
router.patch('/:uid',Zod_Validation_Request(Update_User_Zod_Type),User_Controller.Update_User_Controller);
// delete a user route
router.delete('/:uid',User_Controller.Delete_User_Controller);
// get all user route
router.get('/',User_Controller.Get_All_User_Controller)
// get one user route
router.get('/:uid',User_Controller.Get_One_User_Controller);




export const User_Routes =  router;
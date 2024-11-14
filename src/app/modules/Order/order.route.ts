

import express from 'express';
import Zod_Validation_Request from '../../middlewares/Validation_Request';
import { Order_Zod_Type, Update_Order_Zod_Type } from './order.zod';
import { Order_Controller } from './order.controllers';



const router = express.Router();

// create a new order route
router.post('/', Zod_Validation_Request(Order_Zod_Type), Order_Controller.Create_Order_Controller);
// update a order route
router.patch('/:oid', Zod_Validation_Request(Update_Order_Zod_Type), Order_Controller.Update_Order_Controller);
// delete a order route
router.delete('/:oid', Order_Controller.Delete_Delete_Controller);
// get all order of a user route
router.get('/user/:uid', Order_Controller.Get_All_Order_Of_A_User_Controller);
// get one order route
router.get('/:oid', Order_Controller.Get_One_Order_Controller);




export const Order_Routes = router;
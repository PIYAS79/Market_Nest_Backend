

import express from 'express';
import Zod_Validation_Request from '../../middlewares/Validation_Request';
import { Product_Zod_Type, Update_Product_Zod_Type } from './product.zod';
import { Product_Controller } from './product.controllers';



const router = express.Router();

// create a new product route
router.post('/', Zod_Validation_Request(Product_Zod_Type), Product_Controller.Create_Product_Controller);
// update a product route
router.patch('/:pid', Zod_Validation_Request(Update_Product_Zod_Type), Product_Controller.Update_Product_Controller);
// delete a product route
router.delete('/:pid', Product_Controller.Delete_Product_Controller);
// get all product route
router.get('/', Product_Controller.Get_All_Product_Controller);
// get one product route
router.get('/:pid', Product_Controller.Get_One_Product_Controller);




export const Product_Routes = router;


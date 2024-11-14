

import express from 'express';
import Zod_Validation_Request from '../../middlewares/Validation_Request';
import { Update_Category_Zod_Type, Zod_Category_Type } from './category.zod';
import { Category_Controller } from './category.controllers';



const router = express.Router();


// create a new category route
router.post('/', Zod_Validation_Request(Zod_Category_Type), Category_Controller.Create_Category_Controller);

// update a category route
router.patch('/:cid', Zod_Validation_Request(Update_Category_Zod_Type), Category_Controller.Update_Category_Controller);

// delete a category route
router.delete('/:cid', Category_Controller.Delete_Category_Controller);

// get all category route
router.get('/', Category_Controller.Get_All_Category_Controller);

// get one category route
router.get('/:cid', Category_Controller.Get_One_Category_Controller);



export const Category_Routes = router;

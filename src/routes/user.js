import { Router } from "express";
import { catchErrors } from '../utils/errorHandler';
import * as Controller from '../controllers';

import { createUserSchema, updateUser, Validator } from '../biz-logic'



export default function UserRoutes() {
    const router = Router();

    router.post('/create', Validator.body(createUserSchema), catchErrors(Controller.createUserController));

    router.get('/all', catchErrors(Controller.fetchUsersController));

    router.get('/:user_id', catchErrors(Controller.fetchUserController));

    router.put('/update/:user_id',Validator.body(updateUser), catchErrors(Controller.updateUserController))

    router.delete('/:user_id', catchErrors(Controller.deleteUserController));

    return router;
}
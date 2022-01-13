import { 
    createUser,
    fetchUser,
    fetchUsers,
    updateUser,
    deleteUser
} from './user';

import { 
    creatingUser,
    fetchingUser,
    fetchingUsers,
    updatingUser,
    deletingUser
 } from '../use-case';


 const createUserController = createUser(creatingUser);

 const fetchUsersController = fetchUsers(fetchingUsers);

 const fetchUserController = fetchUser(fetchingUser);

 const updateUserController = updateUser(updatingUser);

 const deleteUserController = deleteUser(deletingUser);


 export {
    createUserController,
    fetchUsersController,
    fetchUserController,
    updateUserController,
    deleteUserController
 }
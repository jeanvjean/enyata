import { userDb } from '../data-access';
import { hash, hashSync, genSalt } from 'bcryptjs';

import { 
    createUser,
    fetchAllUsers,
    deleteUser,
    updateUser,
    fetchUser 
} from './user';


const creatingUser = createUser({
    userDb,
    hashSync,
    genSalt,
    hash
});

const fetchingUsers = fetchAllUsers({
    userDb
});

const deletingUser = deleteUser({
    userDb
});

const updatingUser = updateUser({
    userDb
});

const fetchingUser = fetchUser({
    userDb
})


export {
    creatingUser,
    fetchingUser,
    fetchingUsers,
    updatingUser,
    deletingUser
}


function createUser({
    userDb,
    hashSync,
    genSalt,
    hash
}){
    return async function({body:{first_name, email, last_name, password}}) {
        // console.log(data)
        let userExists = await userDb.findUserByEmail(email);
        if(userExists) {
            return {
                status: false,
                message: 'a user already exists with this email'
            }
        }
        const salt = await genSalt(10);
        // console.log(salt);
        let passwordHash = await hash(password, salt)
        console.log(passwordHash);
        let user = await userDb.createUser({
            first_name,
            last_name,
            email,
            password:passwordHash
        });
        return user;
    }
}

function fetchAllUsers({
    userDb
}) {
    return async function({query}) {
        const users = await userDb.find();
        // console.log(users)
        return { users };
    }
}

function fetchUser({
    userDb
}) {
    return async function({params:{user_id}}) {
        const user = await userDb.findById(user_id);
        if(!user){
            return {
                user:false,
                message: 'user not found'
            }
        }
        return { user }
    }
}

function updateUser({
    userDb
}) {
    return async function({params:{user_id}, body}) {
        let user = await userDb.findById(user_id);
        if(!user) {
            throw new Error('User Not found');
        }
        let update = await userDb.update(user_id, body);

        return {message: 'Operation successful'}
    }
}

function deleteUser({
    userDb
}) {
    return async function({params:{user_id}}) {
        let user = await userDb.findById(user_id);
        if(!user) {
            throw new Error('User Not found');
        }

        await userDb.findByIdAndDelete(user_id)

        return {message: 'Operation successful'}
    }
}

export {
    createUser,
    fetchAllUsers,
    deleteUser,
    updateUser,
    fetchUser
}
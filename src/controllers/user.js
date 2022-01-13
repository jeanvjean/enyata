

const createUser = createuser=>{
    return async function(req, res) {
        const data = await createuser(req)
        return res.is.created({
            data
        });
    }
}

const fetchUser = fetchuser=>{
    return async function(req, res) {
        const data = await fetchuser(req);
        return res.is.ok(data)
    }
}

const updateUser = updateuser=>{
    return async function(req, res){
        const data = await updateuser(req);
        return res.is.updated(data);
    }
}

const deleteUser = deleteuser=>{
    return async function(req, res){
        const data = await deleteuser(req);
        return res.is.ok(data);
    }
}

const fetchUsers = fetchusers=>{
    return async function(req, res) {
        const data = await fetchusers(req);
        return res.is.ok(data);
    }
}

export {
    createUser,
    fetchUser,
    fetchUsers,
    updateUser,
    deleteUser
}
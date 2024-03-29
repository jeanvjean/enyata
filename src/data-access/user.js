

export default function UserDb(User){
    const createUser = data=> User.create(data);

    const find = () => User.findAll();

    const findUserByEmail = email=> User.findOne({where: {email: email}})

    const findById = userId=> User.findOne({where: {id: userId}})

    const update = (userId, data) => User.update({...data}, {where:{ id: userId }} )

    const findByIdAndDelete = userId=> User.destroy({where:{ id: userId}});

    return Object.freeze({
        createUser,
        find,
        findById,
        findByIdAndDelete,
        update,
        findUserByEmail
    });
}
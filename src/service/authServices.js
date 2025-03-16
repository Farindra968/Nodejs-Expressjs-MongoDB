import Users from '../modules/user.js'

const login = async (data) => {
    const users = await Users.findOne({
        email: data.email
    });
    if (!users) throw new Error("User not found")
    return users
};

const register = async (data) => {
    const register = await Users.create({
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        address: data.address
    })
    if (!register) throw new Error("Not sign Up")
    return register;
}

export default {login, register}
import { Error } from 'mongoose';
import Users from '../modules/user.js'

const login = async(data) => {
    const users = await Users.findOne({
        email: data.email
    });
    if (!users) throw new Error("User not found")
    return users
}

export default {login}
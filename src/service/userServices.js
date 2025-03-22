import Users from '../modules/user.js'
import { USER_ROLE, MERCHET_ROLE } from '../constant/role.js';
import bcrypt from 'bcryptjs';

// Create a new Merchant User
const createMerchantUser = async (data) => {
    const hassPassword = bcrypt.hashSync(data.password)
    
    const user = await Users.create({
        name: data.name,
        phone: data.phone,
        email: data.email,
        password: hassPassword,
        address: data.address,
        role: [USER_ROLE, MERCHET_ROLE]
    });

    return user;
};

const updateMerchantUser = async (id, data) => {
    const hassPassword = bcrypt.hashSync(data.password)
    const user = await Users.findByIdAndUpdate(id, {
        name: data.name,
        phone: data.phone,
        password: hassPassword,
        address: data.address
    })

    return user;
}

export default { createMerchantUser, updateMerchantUser };

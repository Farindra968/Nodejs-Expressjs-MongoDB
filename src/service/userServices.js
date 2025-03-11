import Users from '../modules/user.js'

// Get all User data from DB
const getUserData = async () => {
    return await Users.find();
};

/// Get single user data from DB
const getUserDataById = async (id) => {
    return await Users.findById(id);
}

/// Add User data from DB
const addUser = async (data) => {
    const userData = await Users.create(data);
    return userData;
}

/// delete single User data 
const deleteUser = async (id) => {
    const userdelet = await Users.findByIdAndDelete(id);
    return userdelet;
}



export default { getUserData, addUser, getUserDataById, deleteUser };
import userServices from "../service/userServices.js";

/// Get all Users data
const getAllUser = async (req, res) => {
    const user = await userServices.getUserData();
    res.json(user) 
}

const getUserbyID = async (req, res) => {
    const id = req.params.id;
    const user = await userServices.getUserDataById(id);

    if(!user) res.status(400).send("User not found")
    res.json(user)
}

/// Add User data
const createUser = async (req, res) => {
    const userData = await userServices.addUser(req.body)
    res.send(userData)
}

// Delete user
const deleteUser = async (req, res) => {
    const id = req.params.id;
    const user = await userServices.deleteUser(id)
    res.send("User Delete Sucessfully")
}


export  {getAllUser, createUser, getUserbyID, deleteUser}
import { ADMIN_ROLE } from "../constant/role.js";
import userServices from "../service/userServices.js";

/// Get all Users data
const getAllUser = async (req, res) => {
  // try catch for handeling error
  try {
    const user = await userServices.getUserData();
    res.json(user);
  } catch (error) {
    res.status(500).sed(error.message);
  }
};

const getUserbyID = async (req, res) => {
  const id = req.params.id;

  // try catch for handeling error
  try {
    const user = await userServices.getUserDataById(id);

    // if user not found
    if (!user) res.status(400).send("User not found");
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

/// Add User data
const createUser = async (req, res) => {
  /// try catch for handeling error
  try {
    const userData = await userServices.addUser(req.body);
    res.send(userData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Delete user
const deleteUser = async (req, res) => {
  const id = req.params.id;

  // try catch for handeling error
  try {
    const user = await userServices.deleteUser(id);
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

/// Update User data
const updaeUser = async (req, res) => {
  const { id } = req.params;


  // try catch for handeling error
  try {

    const data = await userServices.updateUser(id, req.body);
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { getAllUser, createUser, getUserbyID, deleteUser, updaeUser };

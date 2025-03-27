import Users from "../modules/user.js";
import { USER_ROLE, MERCHET_ROLE } from "../constant/role.js";
import bcrypt from "bcryptjs";

// Get all User
const getAllUser = async () => {
  return await Users.find();
};

// Get All Customer
const getAllCustomer = async () => {
  return await Users.find({ role: [USER_ROLE] });
};

// Get All Merchant
const getAllMerchant = async () => {
  return await Users.find({ role: [USER_ROLE, MERCHET_ROLE] });
};

// Get User by ID
const getUserByID = async (id) => {
  return await Users.findById(id);
};
// Create a new Merchant User
const createMerchantUser = async (data) => {
  const hassPassword = bcrypt.hashSync(data.password);

  const user = await Users.create({
    name: data.name,
    phone: data.phone,
    email: data.email,
    password: hassPassword,
    address: data.address,
    role: [USER_ROLE, MERCHET_ROLE],
  });

  return user;
};

// Update  User
const updateUser = async (id, data) => {
  const updateData = {
    name: data.name,
    phone: data.phone,
    address: data.address,
  };
  if (data.password) updateData.password = bcrypt.hashSync(data.password);
  return await Users.findByIdAndUpdate(id, updateData, {
    new: true,
  });
};

//delete user
const deleteUser = async (id) => {
  return await Users.findByIdAndDelete(id);
};

// Upload Profile image
const uploadProdileimg = async () => {
  console.log("Image Uploaded");
};

export default {
  getAllUser,
  getAllCustomer,
  createMerchantUser,
  getAllMerchant,
  updateUser,
  deleteUser,
  getUserByID,
  uploadProdileimg,
};

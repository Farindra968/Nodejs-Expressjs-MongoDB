import { PASSWORD_REGEX } from "../constant/regex.js";
import userServices from "../service/userServices.js";
import userDataFormatter from '../helpers/userDataFormatter.js'
import { jsonToken } from "../utils/jwtToken.js";
import { ADMIN_ROLE, MERCHET_ROLE } from "../constant/role.js";


//Get All User
const getAllUser = async(req, res) => {
  try {
    const user = await userServices.getAllUser();
    const formatUserData = user.map((user) => userDataFormatter(user))
    res.json(formatUserData);
  } catch (error) {
    res.status(statusCode || 500).send(error.message)
  }
}

// Get User By ID 
const getUserByID = async (req, res) => {
  const id = req.params.id;
  const loggInUser = req.user;
  // try catch for handeling error
  try {
    const user = await userServices.getUserByID(id);

    if (!user) { return res.status(404).send("user not found."); }
    // Using userDataFormatter to format the user data to avoid sending password

     // Check if the user is not an admin and the user is not the same as the logged in user
     if (loggInUser.id != user.id && !user.role.includes(MERCHET_ROLE)) {
      return res.status(401).send("You are not allowed to update this product.");
    };
    
    const formatedUser = userDataFormatter(user)

    console.log(formatedUser)
    res.send(formatedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// Create a new Merchant User
const createMerchantUser = async (req, res) => {
  try {
    const { name, phone, email, confirmpassword, password, address } = req.body;

    // if name not insert while registering
    if (!name) return res.status(422).send("Name is required.");
    // if phone not insert while registering
    if (!phone) return res.status(422).send("Phone Number is Required");
    // if email not insert while registering
    if (!email) return res.status(422).send("Email Address is required");
    // if password not insert while registering
    if (!password) return res.status(422).send("Password is required");
    // if password not insert while registering
    if (!confirmpassword)
      return res.status(422).send("Confirm Password is required");
    // if address city not insert while registering
    if (!address?.city) return res.status(422).send("City is required");

    // checking or matching confirm Password and password
    if (confirmpassword != password)
      return res.status(422).send("Pasword does not match");

    // PASSWORD REGEX validation
    if (!PASSWORD_REGEX.test(password))
      return res
        .status(422)
        .send(
          "Password must contain uppercase, lowercase, number and special character."
        );
    const data = await userServices.createMerchantUser(req.body);

    const formateData = userDataFormatter(data);

    //jwt token;
    const jwttoken = jsonToken(formateData);

    // saving jwt token in cookie
    res.cookie("authToken", jwttoken);
    res.json(formateData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update  User
const updateUser = async (req, res) => {
  const id = req.params.id;
  const loggedInUser = req.user;
  try {

    const user = await userServices.updateUser(id, req.body);

    // user can be update by admin or the user itself
    if (loggedInUser.id != user.id && !loggedInUser.role.includes(ADMIN_ROLE)) {
      return res.status(401).send("You are not allowed to update this user");
    }

    res.json(user);
  } catch (error) {
    res.status( error.statusCode ||500).send(error.message);
  }
};

// delete user
const deteleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await userServices.deleteUser(id);
    res.send("User Deleted Successfully")
  } catch (error) {
    res.status(statusCode || 200).send("User Deleted Successfully")
  }
}

export  { createMerchantUser, updateUser, getAllUser, getUserByID, deteleUser };

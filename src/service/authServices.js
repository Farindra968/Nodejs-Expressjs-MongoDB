import Users from "../modules/user.js";
import bcrypt from "bcryptjs";

const login = async (data) => {
  const users = await Users.findOne({
    // one of the following needed while login email or phone
    $or: [{ email: data.email }, { phone: data.phone }],
  });

  // comparing database hase password with user password for validation
  const comparePassword = bcrypt.compareSync(data.password, users.password);

  // if user password not match with database database has password then;
  if (!comparePassword)
    throw { statusCode: 404, message: "Incorrect email, phone or password" };

  // if user email or phone  not match with database then;
  if (!users) throw { statusCode: 404, message: "User  not found" };
  return users;
};

/// Register Services
const register = async (data) => {
  const hassPassword = bcrypt.hashSync(data.password);
  // check user through email address
  const users = await Users.findOne({
    email: data.email,
  });

  // show message if users already exist
  if (!users)  throw { statusCode: 404, message: "User Already exist" };

  const signup = await Users.create({
    name: data.name,
    phone: data.phone,
    email: data.email,
    password: hassPassword,
    address: data.address,
  });
  if (!signup) throw new Error("Not sign Up");
  return signup;
};

export default { login, register };

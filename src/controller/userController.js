import { PASSWORD_REGEX } from "../constant/regex.js";
import { MERCHET_ROLE } from "../constant/role.js";
import userServices from "../service/userServices.js";

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

const getUserbyId = async (req, res) => {
  const id = req.params.id;

  const loggedinUser = req.user;

  console.log(loggedinUser);
  try {
    const data = await userServices.getUserbyId(id);
    if (!data) return res.status(404).send('User not found2');
    console.log(data);

    if (loggedInUser.id != data.id && !data.role.includes(MERCHET_ROLE)) {
      return res.status(403).send('You are not authorized to access this route');
    }

    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export  { createMerchantUser, getUserbyId };

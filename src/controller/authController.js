import { PASSWORD_REGEX } from "../constant/regex.js";
import userDataFormatter from "../helpers/userDataFormatter.js";
import authServices from "../service/authServices.js";
import jsonToken from "../utils/jwtToken.js";

const login = async (req, res) => {
  /// try catch to handel errors
  try {
    const { email, phone, password } = req.body;

    /// show error message if email or phone is not enter while login
    if (!email && !phone) return res.status(422).send("Email Password is required")
    
    /// show error message if pssword is not enter while login
    if (!password) return res.status(422).send("Passwrd is required");

    const data = await authServices.login(req.body);

    const formateData = userDataFormatter(data)
    
    //jwt token;
    const jwttoken = jsonToken(formateData);

    console.log(jwttoken)
    res.json(formateData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const register = async (req, res) => {
  try {
    ///
    const { name, phone, email, confirmapassword, password, address } =
      req.body;
    
    // if name not insert while registering
    if (!name) return res.status(422).send("Name is required.");
    // if phone not insert while registering
    if (!phone) return res.status(422).send("Phone Number is Required");
    // if email not insert while registering
    if (!email) return res.status(422).send("Email Address is required");
    // if password not insert while registering
    if (!password) return res.status(422).send("Password is required");
    // if password not insert while registering
    if (!confirmapassword) return res.status(422).send("Confirm Password is required");
    // if address city not insert while registering
    if (!address?.city) return res.status(422).send("City is required");

    // checking or matching confirm Password and password
    if (confirmapassword != password)
      return res.status(422).send("Pasword does not match");

    // PASSWORD REGEX validation
    if (!PASSWORD_REGEX.test(password))
      return res
        .status(422)
        .send(
          "Password must contain uppercase, lowercase, number and special character."
        );

    const data = await authServices.register(req.body);
    res.json(userDataFormatter(data));
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { login, register };

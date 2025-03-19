import jwt from "jsonwebtoken";
const jsonToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET);
};

const verifyJwtToken = async (authToken) => {
  return await new Promise((resolve, reject) => {
    jwt.verify(authToken, process.env.JWT_SECRET, (error, data) => {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

export { jsonToken, verifyJwtToken };

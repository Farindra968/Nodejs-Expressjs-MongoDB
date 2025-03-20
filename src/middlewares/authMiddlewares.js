import { verifyJwtToken } from "../utils/jwtToken.js";

const authMiddlewares = (req, res, next) => {
  const cookie = req.headers.cookie;

  if (!cookie) return res.status(401).send("User not authenticate");
    const authToken = cookie.split("=")[1];
  verifyJwtToken(authToken)
    .then((data) => {
        req.user = data;
      next();
    })
    .catch(() => {
      res.status(401).send("Invalid Token ID ");
    });
};

export default authMiddlewares;

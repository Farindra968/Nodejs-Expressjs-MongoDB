const logger = (req, res, next) => {
    const cookie = req.header.cookie;
    if (!cookie) return res.status(401).send("User not authenticate")
    next();
    
};

export default logger
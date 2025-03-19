
const roleBasedAuth = (role) => {
    return (req, res, next) => {
        if (req.user.role.includes(role)) return next();
        res.status(403).send("You are not allowed to access this route");
    }

}

export default roleBasedAuth

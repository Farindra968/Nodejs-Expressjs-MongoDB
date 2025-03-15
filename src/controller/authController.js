import authServices from "../service/authServices.js"

const login = async (req, res) => {
    try {
        const login = await authServices.login(req.body)
        res.cookie("userId", login._id);
        res.json(login)
        
    } catch (error) {
        res.status(500).send(error.message)
    }
};

export {login}
import authServices from "../service/authServices.js"

const login = async (req, res) => {
    /// try catch to handel errors
    try {
        const login = await authServices.login(req.body)
        res.cookie("userId", login._id); /// kepping user id in cookie
        res.json(login)
        
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const register = async (req, res) => {
    try {
        const registerUser = await authServices.register(req.body)
        res.json(registerUser)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export {login, register}
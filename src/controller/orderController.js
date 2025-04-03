import orderServices from "../service/orderServices.js"

const getAllOrders = async(req, res) => {
    // try catch
    try {
    const data = await orderServices.getAllOrders();
    res.json(data)
    } catch (error) {
        res.status(500).send(error)
    }
}

export {getAllOrders}
import orderServices from "../service/orderServices.js"


// get all order
const getAllOrders = async (req, res) => {
    // try catch
    try {
        const data = await orderServices.getAllOrders();
        res.json(data)
    } catch (error) {
        res.status(500).send(error)
    }
};

// Create Order
const createOrder = async (req, res) => {
    try {
        const data = await orderServices.createOrder(req.body)
        res.json(data)
    } catch (error) {
        res.status(500).send(error)
    }
}

export {getAllOrders, createOrder}
import Order from "../modules/order.js"

// Get All Order
const getAllOrders = async () => {
    return await Order.find();
}


//Create order
const createOrder = async (data) => {
    return await Order.create(data);
}

export default {getAllOrders, createOrder}
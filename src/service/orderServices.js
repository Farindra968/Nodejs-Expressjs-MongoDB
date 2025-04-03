import Order from "../modules/order.js"

const getAllOrders = async () => {
    return await Order.find();
}


export default {getAllOrders}
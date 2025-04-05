import Order from "../modules/order.js";

// Get All Order
const getAllOrders = async () => {
  return await Order.find()
    .populate("userId", "name email phone")
    .populate("orderItems.product", "name price productImages");
};

// Get Order By User
const getOrderByUser = async (userId) => {
  return await Order.find({ userId: userId })
    .populate("userId", "name email phone")
    .populate("orderItems.product", "name price productImages");
};


// Get Order By ID or Order Tracking 
const getOrderByOrderNumber = async (orderId) => {
    return await Order.findOne({ orderNumber: orderId })
    .populate("userId", "name email phone")
    .populate("orderItems.product", "name price productImages");
}

//Create order
const createOrder = async (data) => {
  return await Order.create(data);
};



export default { getAllOrders, createOrder, getOrderByUser, getOrderByOrderNumber };

import { PENDING_ORDER } from "../constant/orderStatus.js";
import Order from "../modules/order.js";

// Get All Order
const getAllOrders = async (query) => {
  return await Order.find({OrderStatus: query.OrderStatus || PENDING_ORDER}).sort({createdAt:-1})
    .populate("userId", "name email phone")
    .populate("orderItems.product", "name price productImages");
};

// Get Order By User
const getOrderByUser = async (userId, query) => {
  return await Order.find({ userId: userId, OrderStatus: query.OrderStatus || PENDING_ORDER })
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

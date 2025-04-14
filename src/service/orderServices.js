import { PENDING_ORDER } from "../constant/orderStatus.js";
import Order from "../modules/order.js";
import payViaKhalti from "../utils/khalti.js";

// Get All Order
const getAllOrders = async (query) => {
  return await Order.find({ status: query.status || PENDING_ORDER })
    .sort({ createdAt: -1 })
    .populate("userId", "name email phone")
    .populate("orderItems.product", "name price productImages");
};

// Get All Order By User [Only their order]
const getOrderByUser = async (userId, query) => {
  const order = await Order.find({
    userId: userId,
    status: query.status || PENDING_ORDER,
  })
    .populate("userId", "name email phone")
    .populate("orderItems.product", "name price productImages");

  return order;
};

// Get Order By ID or
const getOrderByID = async (id) => {
  const order = await Order.findById({ _id: id })
    .populate("userId", "name email phone")
    .populate("orderItems.product", "name price productImages");
  if (!order) {
    throw {
      statusCode: 404,
      message: "Order not found.",
    };
  }
  return order;
};

//Create order
const createOrder = async (data) => {
  data.orderNumber = crypto.randomUUID(); // generating Order Number random
  return await Order.create(data);
};

// Update order Status
const updateOrderStatus = async (id, status) => {
  const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
  return order;
};

// Khalti Payment checkout Order
const checkOutOrder = async ({id}, data) => {
  const order = await Order.findById(id)
    .populate("userId", "name email phone")
    .populate("orderItems.product", "name price productImages");
  
  // if order not found
  if (!order) {
    throw new Error("Order not found");
  }

  return await payViaKhalti({
    return_url: data.return_url,
    website_url: data.website_url,
    amount: order.totaPrice,
    orderId: order.id,
    orderName: order.orderNumber,
    customerInfo: order.userId,
  });
};

// Delete Order
const deleteOrder = async (id) => {
  return await Order.findByIdAndDelete(id);
};

export default {
  getAllOrders,
  createOrder,
  getOrderByUser,
  getOrderByID,
  updateOrderStatus,
  checkOutOrder,
  deleteOrder,
};

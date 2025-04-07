import orderServices from "../service/orderServices.js";

// get all order
const getAllOrders = async (req, res) => {
  // try catch
  try {
    const data = await orderServices.getAllOrders(req.query);
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Create Order
const createOrder = async (req, res) => {
  const input = req.body;
  const user = req.user;

  try {
    if (!input.orderNumber) {
      return res.status(422).send("Order Number is required");
    }
    if (!input.orderItems || input.orderItems?.length == 0) {
      return res.status(422).send("Order Items is Required");
    }
    if (!input.orderItems[0]?.product) {
      return res.status(422).send("Products is required");
    }
    if (!input.totaPrice) {
      return res.status(422).send("Total Price is Required");
    }

    // if there is no input usr then user logging user id
    if (!input.userId) {
      input.userId = user.id;
    }

    // if input user did have shipping address
    if (!input.shippingaddress) {
      // if login user did't have address then throw error
      if (!user.address) {
        return res.status(422).send("Shipping Address is required");
      }
      // if user did't have shipping address then user login user address
      input.shippingaddress = user.address;
    }

    const data = await orderServices.createOrder(input);
    res.json(data);
  } catch (error) {
    res.status(statusCode || 500).send(error.message);
  }
};

// Get Order By User
const getOrderByUser = async (req, res) => {
  const userId = req.user.id;
  const query = req.query
  try {
    const data = await orderServices.getOrderByUser(userId,query);
    if (!data) {
      return res.status(404).send("Order not found");
    }
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get Order By ID or Order Tracking
const getOrderByOrderNumber = async (req, res) => {
  const { orderId } = req.params;
  try {
    const data = await orderServices.getOrderByOrderNumber(orderId);
    if (!data) {
      res.status(400).send("Order is not found or invalid order number");
    }
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export { getAllOrders, createOrder, getOrderByUser, getOrderByOrderNumber };

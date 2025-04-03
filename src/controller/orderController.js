import orderServices from "../service/orderServices.js";

// get all order
const getAllOrders = async (req, res) => {
  // try catch
  try {
    const data = await orderServices.getAllOrders();
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Create Order
const createOrder = async (req, res) => {
  const input = req.body;

  try {
    if (!input.orderNumber) {
      return res.status(422).send("Order Number is required");
    }
    if (input.orderItems.length == 0) {
      return res.status(422).send("Order Number is Required");
    }
    if (!input.orderItems[0].product) {
      return res.status(422).send("Products is required");
    }
    if (!input.totalPrice) {
      return res.send(422).send("Total Price is Required");
    }

    const data = await orderServices.createOrder(input);
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getAllOrders, createOrder };

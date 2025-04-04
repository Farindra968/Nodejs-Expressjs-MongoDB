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
  const user = req.user;

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

    // if there is no input usr then user logging user id
    if (!input.user) {
      input.user = user.id;
    }

    // if input user did have shipping address
    if (!input.shippingaddress) {
      
      // if login user did't have address then throw error
      if (!user.address) {
        return res.send(422).send("Shipping Address is required");
      }
      // if user did't have shipping address then user login user address
      input.shippingaddress = user.address;
    }

    const data = await orderServices.createOrder(input);
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getAllOrders, createOrder };

import productServices from "../service/productServices.js";

// Method: Get Product
const getAllProduct = async (req, res) => {
  // try catch for handeling error
  try {
    const product = await productServices.getAllProduct();
    res.json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Method Get Product By ID
const getProductbyId = async (req, res) => {
  const id = req.params.id;

  // try catch for handeling error
  try {
    const product = await productServices.getProductbyID(id);

    if (!product){ return res.status(404).send("Product not found.");}

    res.json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Method Post (Create) Product
const postProduct = async (req, res) => {
  // extracting user id from req.user (jwt token: authMiddlewares)
  const userID = req.user.id;
  console.log(userID);
  
  // try catch for handeling error
  try {
    // Calls the addProduct function from productServices with request body data
    const data = await productServices.addProduct(req.body, userID);

    // Sends the response with the added product data
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Method Delete Product by ID
const deleteProductByID = (req, res) => {
  // dynamic id function api/products/:id
  const { id } = req.params;

  // try catch for handeling error
  try {

    const data = productServices.deleteProductbyId(id);
    console.log("Product Deleted Successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Method Put (Update) update product by ID
const updateProductbyID = async (req, res) => {
  const { id } = req.params;

  // try catch for handeling error
  try {
    const data = await productServices.updateProduct(id, req.body);
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export {
  getAllProduct,
  getProductbyId,
  postProduct,
  deleteProductByID,
  updateProductbyID,
};

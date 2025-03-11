import productServices from "../service/productServices.js";

// Method: Get Product
const getAllProduct = async (req, res) => {
  const product = await productServices.getAllProduct();
  res.json(product);
};

// Method Get Product By ID
const getProductbyId = async (req, res) => {
  const id = req.params.id;

  const product = await productServices.getProductbyID(id); // finding single product by id

  //if product not found
  if (!product) res.status(404).send("Sorry, Product Not Found");
  res.json(product);
};

// Method Post (Create) Product
// Function to handle product posting
const postProduct = async (req, res) => {
  // Calls the addProduct function from productServices with request body data
  const data = await productServices.addProduct(req.body);

  // Sends the response with the added product data
  res.send(data);
};

// Method Delete Product by ID
const deleteProductByID = (req, res) => {
  // dynamic id function api/products/:id
  const { id } = req.params;
  const data = productServices.deleteProductbyId(id);
  console.log("Product Deleted Successfully");
};

//Method Put (Update) update product by ID
const updateProductbyID = (req, res) => {
  const { id } = req.params;
  res.send(`Update Product ${id}`);
};

export {
  getAllProduct,
  getProductbyId,
  postProduct,
  deleteProductByID,
  updateProductbyID,
};

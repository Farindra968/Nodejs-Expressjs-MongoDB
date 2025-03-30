import productServices from "../service/productServices.js";
import { ADMIN_ROLE } from "../constant/role.js";
import productDataFormatter from "../helpers/productDataFormatter.js";


// [1]
// Method: Get Product
const getAllProduct = async (req, res) => {
  // try catch for handeling error
  try {
    const product = await productServices.getAllProduct(req.query);

    // formating the product data
    const productFormat = product.map((product)=> productDataFormatter(product));
      
    res.json(productFormat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Method : Get Product Categoty List
const getProductCategoryList = async (req, res) => {
  try {
    const categories = await productServices.getProductCategoryList();
    res.json(categories)
  } catch (error) {
    res.status(statusCode || 500).send(error.message)
  }
}

// Method Get Product Brand List
const getProductBrandList =async (req, res)=> {
  // try catch for handeling eror
  try {
    const brandList = await productServices.getProductBrandList();
    res.json(brandList)
  } catch (error) {
    res.status(statusCode || 500).send(error.message)
  }
}

// Method Get Product Category
const getProductCategoryItems = async (req, res) => {
  // try catch for handeling error
  const { categoryItems } = req.params;
  try {
    const product = await productServices.getProductCategoryItems(categoryItems);

    // formating the product data
    const productFormat = product.map((product)=> productDataFormatter(product));
      
    res.json(productFormat);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const getProductBrandItems = async (req, res) => {
  // try catch for handeling error
  const { brandItems } = req.params;
  try {
    const product = await productServices.getProductBrandItems(brandItems);

    // formating the product data
    const productFormat = product.map((product)=> productDataFormatter(product));
      
    res.json(productFormat);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const getProductOfMerchant = async (req, res) => {
  const { merchant } = req.params;
  // try catch for handeling error
  try {
    const data = productServices.getProductOfMerchant(merchant);
    // formating the product data
    const productFormat = (await data).map((product) => productDataFormatter(product));
    res.json(productFormat)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

// [2]
// Method Get Product By ID
const getProductbyId = async (req, res) => {
  const id = req.params.id;

  // try catch for handeling error
  try {
    const product = await productServices.getProductbyID(id);

    if (!product){ return res.status(404).send("Product not found.");}

    // formating the product data
    const productFormat = productDataFormatter(product);

    res.send(productFormat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// [3]
// Method Post (Create) Product
const postProduct = async (req, res) => {
  // extracting user id from req.user (jwt token: authMiddlewares)
  const userID = req.user.id;
  const files = req.files;
  const input = req.body
  
  // try catch for handeling error
  try {
    // Calls the addProduct function from productServices with request body data
    const data = await productServices.addProduct(input, files, userID);

    // formating the product data
    const productFormat = productDataFormatter(data);

    // Sends the response with the added product data
    res.send(productFormat);


  } catch (error) {
    res.status(500).send(error.message);
  }
};

// [4]
// Method Delete Product by ID
const deleteProductByID = (req, res) => {
  // dynamic id function api/products/:id
  const { id } = req.params;

  // try catch for handeling error
  try {

    const data = productServices.deleteProductbyId(id);
    console.log("Product Deleted Successfully");
    res.send("Product Deleted Successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// [5]
//Method Put (Update) update product by ID
const updateProductbyID = async (req, res) => {
  const { id } = req.params;
  const user = req.user

  // try catch for handeling error
  try {
    const product = await productServices.getProductbyID(id);

    if (!product) { return res.status(404).send("Product not found."); }

    // Check if the user is not the creator of the product and is not an admin
    if (product.createdBy != user.id && !user.role.includes(ADMIN_ROLE)) {
      return res.status(401).send("You are not allowed to update this product.");
    };
    
    const data = await productServices.updateProduct(id, req.body);

    // formating the product data
    const productFormat = productDataFormatter(data);

    res.send(productFormat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export {
  getAllProduct,
  getProductCategoryList,
  getProductBrandList,
  getProductCategoryItems,
  getProductBrandItems,
  getProductOfMerchant,
  getProductbyId,
  postProduct,
  deleteProductByID,
  updateProductbyID,
};

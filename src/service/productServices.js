// Database related work
import Product from "../modules/product.js";

// Get all product data
const getAllProduct = async (query) => {
  /// Sort = Asc : 1 = price start from 0 , DES: -1 = price start from higher
  const sort = JSON.parse(query.sort || "{}")
  const limit = query.limit
  const offsets = query.offsets
  return await Product.find().sort(sort).limit(limit).skip(offsets);
};

// Get Product Category List
const getProductCategoryList = async () => {
  return await Product.distinct("category");
}

// Get Product Brand LIst 
const getProductBrandList = async ()=> {
  const brandList = await Product.distinct("brand");
  return brandList
}

// Get Product By Category
const getProductCategoryItems = async (categoryItems) => {
  return await Product.find({category: categoryItems});
};

// Get Product By Brand
const getProductBrandItems = async (brandItems) => {
  return await Product.find({brand: brandItems});
};

//Get Single Product Data
const getProductbyID = async (id) => {
  console.log(id);
  return await Product.findById(id); /// Getting product by id
};

/// Add product (Post Method)
const addProduct = async (data, userID) => {
  const productData = await Product.create({
    name: data.name,
    price: data.price,
    category: data.category,
    stock: data.stock,
    brand: data.brand,
    images: data.images,
    createdBy: userID,
  });
  return productData;
};

// Deleting Product (Delete Method)
const deleteProductbyId = async (id) => {
  return await Product.findByIdAndDelete(id); // deleting user by user id
};

/// Update Product (put method)
const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, {
    new: true,
  })
}



export default { getAllProduct, getProductCategoryList, getProductCategoryItems, getProductBrandList, getProductBrandItems, getProductbyID, addProduct, deleteProductbyId, updateProduct };

// Database related work
import fs from "fs";
import Product from "../modules/product.js";

// Get all product data
const getAllProduct = async () => {
  return await Product.find();
};

// Get Product Category
const getProductCategoryItems = async (categoryItems) => {
  return await Product.find({category: categoryItems});
};

// Get Product Category
const getProductBrandItems = async (brandItems) => {
  return await Product.find({brand: brandItems});
};

// Get Product Brand
// const getProductBrand = async () => {
//   return await Product.find().distinct("brand");
// };

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



export default { getAllProduct, getProductCategoryItems, getProductBrandItems, getProductbyID, addProduct, deleteProductbyId, updateProduct };

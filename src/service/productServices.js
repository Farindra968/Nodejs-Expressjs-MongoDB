// Database related work
import fs from "fs";
import Product from "../modules/product.js";

// Get all product data
const getAllProduct = async () => {
  return await Product.find();
};

//Get Single Product Data
const getProductbyID = async (id) => {
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
  return await Product.findByIdAndUpdate(id, data)
}

export default { getAllProduct, getProductbyID, addProduct, deleteProductbyId, updateProduct };

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
const addProduct = async (data) => {
  const productData = await Product.create(data);
  return productData;
};

// Deleting Product (Delete Method)
const deleteProductbyId = async (id) => {
  return await Product.findByIdAndDelete(id); // deleting user by user id
};

export default { getAllProduct, getProductbyID, addProduct, deleteProductbyId };

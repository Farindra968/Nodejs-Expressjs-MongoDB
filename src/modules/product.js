import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
    name: String,
    category: String,
    brand: String,
    price: Number,
});

const model = mongoose.model("Product", ProductSchema);

export default model;
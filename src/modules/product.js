import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    brand: String,
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    rate: {
        type: Number,
        min: 0,
        max: 5
    },
    stock: {
        type: Number,
        min: 0,
        required: true
    },
    images: {
        type: [String],
        required: true,
        min: 1,
    }
});

const model = mongoose.model("Product", ProductSchema);

export default model;
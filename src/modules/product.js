import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
        lowerCase: true,
    },
    brand: {
        type: String,
        required: true,
        trim: true,
        lowerCase: true,
    },
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
    productImages: {
        type: [String],
        required: true,
        min: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    }
});

const model = mongoose.model("Product", ProductSchema);

export default model;
import mongoose, { Schema } from "mongoose";
import {
  COMPLETE_ORDER,
  DELiVERED_ORDER,
  PENDING_ORDER,
  SHIFT_ORDER,
} from "../constant/orderStatus.js";

const OrderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  orderItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
      quantity: {
        type: String,
        default: 1,
      },
    },
  ],
  totaPrice: {
    type: Number,
    required: true,
  },
  OrderStatus: {
    type: String,
    default: PENDING_ORDER,
    enum: [PENDING_ORDER, COMPLETE_ORDER, SHIFT_ORDER, DELiVERED_ORDER],
  },
  address: {
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    street: {
      type: String,
    },
    postal_code: {
      type: String,
    },
    phone: {
      type: Number,
    },
  },
  createdAt: {
    type: String,
    default: Date.now(),
  },
});

const model = mongoose.model("Order", OrderSchema);

export default model;

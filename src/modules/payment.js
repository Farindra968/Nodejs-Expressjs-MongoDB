import mongoose from "mongoose";
import { CARD_METHOD, CASH_METHOD, ONLINE_METHOD } from "../constant/paymentMethod";
import { COMPLETE_STATUS, FAILED_STATUS, PENDING_STATUS } from "../constant/paymentStatus";

const PaymentSchema = mongoose.Schema({
    amount: {
        types: Number, 
        required: true
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: [CASH_METHOD, CARD_METHOD, ONLINE_METHOD]
    },
    paymentStatus: {
        type: String,
        required: true,
        enum: [PENDING_STATUS, COMPLETE_STATUS, FAILED_STATUS]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    OrderId: {
        type: mongoose.Types.ObjectId,
        ref: "Order",
        required: true,
    },
    
})

const model = mongoose.model("Payment", PaymentSchema)
export default model;
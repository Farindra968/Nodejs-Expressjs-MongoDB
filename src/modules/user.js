import mongoose, { Schema } from "mongoose";
import { EMAIL_REGX, PASSWORD_REGEX } from "../constant/regex.js";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => {
        return EMAIL_REGX.test(email);
      },
      message: "Invalid Email",
    },
  },
  password: {
    type: String,
    trim: true,
    required: true,

  },
  role: {
    type: [String],
    default: ["USER"],
  },
  address: {
    city: {
      type: String,
      required: true
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
  },
});

const model = mongoose.model("User", UserSchema);

export default model;

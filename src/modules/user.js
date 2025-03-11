import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: String
})

const model = mongoose.model("User", UserSchema)

export default model;
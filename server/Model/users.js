import mongoose from "mongoose";
const { Schema } = mongoose;

const tableSchema = new Schema({
    name: String,
    email: Email,
    password: String,
});
mongoose.set('strictQuery', true);
export default new mongoose.model("users", tableSchema);
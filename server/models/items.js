import mongoose from "mongoose";
const { Schema } = mongoose;

const tableSchema = new Schema({
  name: String,
  size: Number,
  catagory: String,
  price: Number,
});
mongoose.set("strictQuery", true);
export default new mongoose.model("items", tableSchema);

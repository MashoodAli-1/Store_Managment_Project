import mongoose from "mongoose";
const { Schema } = mongoose;

const tableSchema = new Schema({
  cname: String,
});
mongoose.set("strictQuery", true);
export default new mongoose.model("catagories", tableSchema);

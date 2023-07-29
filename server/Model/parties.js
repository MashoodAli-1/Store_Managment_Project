import mongoose from "mongoose";
const { Schema } = mongoose;

const tableSchema = new Schema({
  pname: String,
  phoneNo: Number,
  address: String,
  cnic: Number,
});
mongoose.set("strictQuery", true);
export default new mongoose.model("parties", tableSchema);

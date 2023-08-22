import mongoose from "mongoose";
const { Schema } = mongoose;

const tableSchema = new Schema({
  cname: String,
  data: [[String]],
  totalBill: Number,
  receivedAmount: Number,
  remainingAmount: Number,
  status: String,
  // date: { type: Date, default: new Date() },
  createdAt: { type: Date, default: Date.now },
});
mongoose.set("strictQuery", true);
export default new mongoose.model("sales", tableSchema);

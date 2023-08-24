import mongoose from "mongoose";
const { Schema } = mongoose;

const tableSchema = new Schema({
  cname: String,
  data: [[String]],
  receivedTillNow: Number, // receive till now (sum of receive amount)
  receiveToday: Number, // receive today
  remainingAmount: Number,
  date: { type: Date, default: new Date() },
  createdAt: { type: Date, default: Date.now },
});
mongoose.set("strictQuery", true);
export default new mongoose.model("accReceivable", tableSchema);

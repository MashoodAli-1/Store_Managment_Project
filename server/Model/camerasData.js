import mongoose from "mongoose";
const { Schema } = mongoose;

const tableSchema = new Schema({
  CameraIp: String,
  PersonIn: Number,
  PersonOut: Number,
  date: { type: Date, default: new Date() },
  createdAt: { type: Date, default: Date.now },
});
mongoose.set("strictQuery", true);
export default new mongoose.model("CamerasData", tableSchema);
import mongoose from "mongoose";
const { Schema } = mongoose;

const tableSchema = new Schema({
    CameraIP: String,
    userId: String,
    createdAt: { type: Date, default: Date.now },
});
mongoose.set('strictQuery', true);
export default new mongoose.model("Cameras", tableSchema);
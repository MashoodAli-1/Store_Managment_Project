import mongoose from "mongoose";
const { Schema } = mongoose;

const tableSchema = new Schema({
    name: String,
    password: String,
    userEmail: String,
    date: { type: Date, default: new Date() },
    createdAt: { type: Date, default: Date.now },
});
mongoose.set('strictQuery', true);
export default new mongoose.model("Users", tableSchema);
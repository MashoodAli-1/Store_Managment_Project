import mongoose, { Model } from "mongoose";
import camerasData from "../Model/camerasData.js";
import cameras from "../Model/cameras.js";
import user from "../Model/users.js";

const connect = async () => {
  await mongoose.connect(
    // process.env.CONNECTION_STRING
    "mongodb+srv://shahzaib_khan:6APyKly9CU9rN9Ko@cluster0.od3cuso.mongodb.net/?retryWrites=true&w=majority"
    // "mongodb+srv://mashood:boom@node-projects.lvpwy1s.mongodb.net/Task-Manager-App?retryWrites=true&w=majoritys"
  );
  console.log("Db connected!");
  // await Table.create({ amount, description });
};

export default connect;

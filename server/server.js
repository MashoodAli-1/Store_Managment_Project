import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sequelize from "./database/db.js";
// import path from "path";
// const bodyParser = require("body-parser");s
import userRoutes from "./routes/users.js";
import companyRoutes from "./routes/companies.js";
import customerRoutes from "./routes/customers.js";
import catagoryRoutes from "./routes/itemCatagory.js";
import itemRoutes from "./routes/items.js";
import partyRoutes from "./routes/parties.js";
import salessRoutes from "./routes/sales.js";
import accRecRoutes from "./routes/accReceivabe.js";
// dotenv.config();
//! port
const port = 4001;
const app = express();
// const publicPath = path.join(__dirname, "public");
// app.use(express.static(publicPath));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//! middlewares
app.use(cors());
app.use(bodyParser.json());

// app.use("/", routes);
app.use("/user", userRoutes);
app.use("/company", companyRoutes);
app.use("/customer", customerRoutes);
app.use("/catagory", catagoryRoutes);
app.use("/item", itemRoutes);
app.use("/party", partyRoutes);
app.use("/sale", salessRoutes);
app.use("/accRec", salessRoutes);

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("connected to db...");
    await sequelize.sync({ force: false });
    app.listen(port, () => {
      console.log(`server listening on port http://localhost:${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

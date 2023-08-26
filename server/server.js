import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connect from "./database/db.js";
import routes from "./routes/index.js";
import session from "express-session";
import cookieParser from "cookie-parser";
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

//! middlewares
app.use(cors());
app.use(bodyParser.json());

app.use("/", routes);
app.use("/user", userRoutes);
app.use("/company", companyRoutes);
app.use("/customer", customerRoutes);
app.use("/catagory", catagoryRoutes);
app.use("/item", itemRoutes);
app.use("/party", partyRoutes);
app.use("/sale", salessRoutes);
app.use("/accRec", salessRoutes);
await connect();
app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});

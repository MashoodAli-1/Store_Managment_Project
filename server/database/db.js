import { Sequelize } from "sequelize";

const sequelize = new Sequelize("webApp", "root", "anas", {
  dialect: "mysql",
  host: "localhost",
});

sequelize
  .sync({ alter: false })
  .then(() => {
    console.log("Database and tables synced (or altered if necessary)");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

export default sequelize;

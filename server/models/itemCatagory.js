import { Sequelize, DataTypes } from "sequelize";

import sequelize from "../database/db.js";

const Category = sequelize.define("Category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Optionally, you can synchronize the table to the database using:
// Category.sync();

// You can also define any associations or additional configurations here.

export default Category;

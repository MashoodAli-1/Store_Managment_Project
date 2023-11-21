import { Sequelize, DataTypes } from "sequelize";

import sequelize from "../database/db.js";

const Company = sequelize.define("Company", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.BIGINT, // Use BIGINT for phone numbers to avoid integer overflow
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Optionally, you can synchronize the table to the database using:
// Company.sync();

// You can also define any associations or additional configurations here.

export default Company;

import { Sequelize, DataTypes } from "sequelize";

import sequelize from "../database/db.js";

const Customer = sequelize.define("Customer", {
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
  cnic: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Optionally, you can synchronize the table to the database using:
// Customer.sync();

// You can also define any associations or additional configurations here.

export default Customer;

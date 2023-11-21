import { Sequelize, DataTypes } from "sequelize";

import sequelize from "../database/db.js";

const Sale = sequelize.define("Sale", {
  cname: {
    type: DataTypes.STRING,
    allowNull: true, // Adjust this based on your requirements
  },
  data: {
    type: DataTypes.JSON, // JSON data type can store arrays of strings
    allowNull: true, // Adjust this based on your requirements
  },
  totalBill: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  receivedAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  remainingAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true, // Adjust this based on your requirements
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
});

// Optionally, you can synchronize the table to the database using:
// Sale.sync();

// You can also define any associations or additional configurations here.

export default Sale;

import { Sequelize, DataTypes } from "sequelize";

import sequelize from "../database/db.js";
const Item = sequelize.define("Item", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Optionally, you can synchronize the table to the database using:
// Item.sync();

// You can also define any associations or additional configurations here.

export default Item;

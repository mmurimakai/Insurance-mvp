const { DataTypes } = require("sequelize");
const sequelize = require("../db/config");

const Provider = sequelize.define("Provider", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

const Category = sequelize.define("Category", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

const Policy = sequelize.define("Policy", {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  Category: { type: Category, allowNull: false },
  provider: { type: Provider, allowNull: false },
  cost: { type: DataTypes.NUMBER },
});

module.exports = { Category, Provider, Policy };

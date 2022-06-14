"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      code: {
        type: DataTypes.INTEGER(4).ZEROFILL,
        primaryKey: true,
        allowNull: false,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING },
      mrp: { type: DataTypes.NUMBER, allowNull: false },
      stock: { type: DataTypes.NUMBER, allowNull: false },
      buyPrice: { type: DataTypes.NUMBER, allowNull: false },
    },
    {}
  );
  Product.associate = function (models) {
    // associations can be defined here
  };
  return Product;
};

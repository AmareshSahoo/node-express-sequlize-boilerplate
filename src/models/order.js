"use strict";

import { orderStatusEnum } from "../enums";

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      orderDate: { type: DataTypes.DATE, allowNull: false },
      shippedDate: { type: DataTypes.DATE },
      orderStatus: {
        type: DataTypes.ENUM(Object.values(orderStatusEnum)),
        allowNull: false,
      },
      comments: { type: DataTypes.STRING },
    },
    {}
  );
  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsTo(models.User);
  };
  return Order;
};

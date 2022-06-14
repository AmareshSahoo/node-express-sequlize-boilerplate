"use strict";
module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define(
    "OrderDetail",
    {
      quantityOrdered: { type: DataTypes.NUMBER, allowNull: false },
      priceEach: { type: DataTypes.NUMBER, allowNull: false },
    },
    {}
  );
  OrderDetail.associate = function (models) {
    // associations can be defined here
    OrderDetail.belongsTo(models.Order);
    OrderDetail.belongsTo(models.Product);
  };
  return OrderDetail;
};

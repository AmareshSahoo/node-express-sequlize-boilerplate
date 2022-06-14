"use strict";
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define(
    "Payment",
    {
      date: { type: DataTypes.DATE },
      amount: { type: DataTypes.NUMBER },
    },
    {}
  );
  Payment.associate = function (models) {
    Payment.belongsTo(models.User);
    Payment.belongsTo(models.Order);
    // associations can be defined here
  };
  return Payment;
};

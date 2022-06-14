"use strict";
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "Address",
    {
      addressLine1: { type: DataTypes.STRING, allowNull: false },
      addressLine2: { type: DataTypes.STRING },
      city: { type: DataTypes.STRING, allowNull: false },
      state: { type: DataTypes.STRING, allowNull: false },
      postalCode: { type: DataTypes.STRING, allowNull: false },
      country: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  Address.associate = function (models) {
    // associations can be defined here
    Address.belongsTo(models.User);
  };
  return Address;
};

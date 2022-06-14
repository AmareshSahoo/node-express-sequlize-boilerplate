import { genderEnum } from "../enums";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
      profilePic: {
        type: DataTypes.STRING,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      verifyToken: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      phone: {
        type: DataTypes.NUMBER,
      },
      gender: {
        type: DataTypes.ENUM(Object.values(genderEnum)),
      },
      DOB: {
        type: DataTypes.DATEONLY,
      },
    },
    {
      defaultScope: {
        attributes: { exclude: ["password", "verifyToken", "isAdmin"] },
      },
      scopes: {
        withSecretColumns: {
          attributes: { include: ["password", "verifyToken", "isAdmin"] },
        },
      },
    }
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Order);
    User.hasMany(models.Address);
    User.hasMany(models.Payment);
  };
  return User;
};

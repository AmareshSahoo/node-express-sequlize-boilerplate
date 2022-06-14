"use strict";

const { orderStatusEnum } = require("../enums");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      orderDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      shippedDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      orderStatus: {
        type: Sequelize.ENUM(Object.values(orderStatusEnum)),
        allowNull: false,
      },
      comments: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Orders");
  },
};

"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("artists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      data: {
        type: DataTypes.JSONB,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Date.now(),
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("artists");
  },
};

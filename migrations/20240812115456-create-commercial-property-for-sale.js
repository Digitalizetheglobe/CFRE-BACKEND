'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CommercialPropertyForSales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      buildingName: {
        type: Sequelize.STRING
      },
      unitNumber: {
        type: Sequelize.STRING
      },
      floor: {
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      builtUpArea: {
        type: Sequelize.FLOAT
      },
      carpetArea: {
        type: Sequelize.FLOAT
      },
      reservedCarParking: {
        type: Sequelize.INTEGER
      },
      reserved2WheelerParking: {
        type: Sequelize.INTEGER
      },
      amenities: {
        type: Sequelize.TEXT
      },
      furnishedDetails: {
        type: Sequelize.JSON
      },
      pricePerSqFt: {
        type: Sequelize.FLOAT
      },
      totalPrice: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CommercialPropertyForSales');
  }
};
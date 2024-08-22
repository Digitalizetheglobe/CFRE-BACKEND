'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('SaleProperty', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      buildingName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      propertyType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aboutProperty: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      unitNo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      floor: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      furnishing: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      builtUpArea: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      carpetArea: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      reservedCarParking: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      reserved2WheelerParking: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      dgBackup: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cafeteria: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      workstation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      amenities: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      cabin: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      conferenceRoom: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      anyOtherFurniture: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      ratePerSqFt: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      basicPrice: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      governmentTaxes: {
        type: Sequelize.FLOAT,
        allowNull: true,
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('SaleProperty');
  }
};

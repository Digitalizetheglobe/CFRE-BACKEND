'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SaleProperties', {
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
      buArea: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      carpetArea: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cost: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      furnishing: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      purpose: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ws: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cabin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      conferenceOrMeetingRoom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      carParking: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bikeParking: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dgBackup: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      cafeteria: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      bannerImage: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ratePerSqFt: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      basicPrice: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      governmentTaxes: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      agreementPeriod: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lockingPeriod: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      rentStartFrom: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      rentPerMonthRsPerSqFt: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      deposit: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      yearlyEscalation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      maintenance: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      propertyTax: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      gstOnRent: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      price: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      furnitureDoneBy: {
        type: Sequelize.STRING,
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SaleProperties');
  },
};

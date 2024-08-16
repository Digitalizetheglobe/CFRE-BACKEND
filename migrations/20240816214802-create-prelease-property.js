'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PreleaseProperties', {
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
      builtUpArea: {
        type: Sequelize.FLOAT
      },
      carpetArea: {
        type: Sequelize.FLOAT
      },
      carParking: {
        type: Sequelize.INTEGER
      },
      bikeParking: {
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      agreementPeriod: {
        type: Sequelize.INTEGER
      },
      lockingPeriod: {
        type: Sequelize.INTEGER
      },
      rentStartFrom: {
        type: Sequelize.DATE
      },
      rentPerMonthPerSqFt: {
        type: Sequelize.FLOAT
      },
      deposit: {
        type: Sequelize.FLOAT
      },
      yearlyEscalation: {
        type: Sequelize.FLOAT
      },
      maintenance: {
        type: Sequelize.STRING
      },
      propertyTax: {
        type: Sequelize.STRING
      },
      gstOnRent: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      furnitureDoneBy: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('PreleaseProperties');
  }
};

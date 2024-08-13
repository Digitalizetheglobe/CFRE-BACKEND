'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CommercialPropertyForRents', {
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
      rentPerSqFt: {
        type: Sequelize.FLOAT
      },
      deposit: {
        type: Sequelize.FLOAT
      },
      yearlyEscalation: {
        type: Sequelize.FLOAT
      },
      agreementPeriod: {
        type: Sequelize.INTEGER
      },
      lockInPeriod: {
        type: Sequelize.INTEGER
      },
      agreementCharges: {
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
    await queryInterface.dropTable('CommercialPropertyForRents');
  }
};
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ShowroomProperties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      buildingName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      unitNo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      floor: {
        type: Sequelize.STRING,
        allowNull: true
      },
      location: {
        type: Sequelize.STRING,
        allowNull: true
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true
      },
      builtUpArea: {
        type: Sequelize.STRING,
        allowNull: true
      },
      carpetArea: {
        type: Sequelize.STRING,
        allowNull: true
      },
      reservedCarParking: {
        type: Sequelize.STRING,
        allowNull: true
      },
      reserved2WheelerParking: {
        type: Sequelize.STRING,
        allowNull: true
      },
      height: {
        type: Sequelize.STRING,
        allowNull: true
      },
      mezzanine: {
        type: Sequelize.STRING,
        allowNull: true
      },
      rentPerSqFt: {
        type: Sequelize.STRING,
        allowNull: true
      },
      deposit: {
        type: Sequelize.STRING,
        allowNull: true
      },
      yearlyEscalation: {
        type: Sequelize.STRING,
        allowNull: true
      },
      agreementPeriod: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lockInPeriod: {
        type: Sequelize.STRING,
        allowNull: true
      },
      agreementCharges: {
        type: Sequelize.STRING,
        allowNull: true
      },
      basicPrice: {
        type: Sequelize.STRING,
        allowNull: true
      },
      otherCharges: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ShowroomProperties');
  }
};

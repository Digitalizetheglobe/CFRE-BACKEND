'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AddProperties', {
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
        type: Sequelize.STRING, // Changed to STRING to allow both numbers and characters
        allowNull: false,
      },
      carpetArea: {
        type: Sequelize.STRING, // Changed to STRING to allow both numbers and characters
        allowNull: false,
      },
      rate: {
        type: Sequelize.STRING, // Changed to STRING to allow both numbers and characters
        allowNull: false,
      },
      cost: {
        type: Sequelize.STRING, // Changed to STRING to allow both numbers and characters
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
        type: Sequelize.STRING, // Changed to STRING to allow both numbers and characters
        allowNull: false,
      },
      cabin: {
        type: Sequelize.STRING, // Changed to STRING to allow both numbers and characters
        allowNull: false,
      },
      conferenceOrMeetingRoom: {
        type: Sequelize.STRING, // Changed to STRING to allow both numbers and characters
        allowNull: false,
      },
      carParking: {
        type: Sequelize.STRING, // Changed to STRING to allow both numbers and characters
        allowNull: false,
      },
      bikeParking: {
        type: Sequelize.STRING, // Changed to STRING to allow both numbers and characters
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
      unitNo: {
        type: Sequelize.STRING, // Added new field
        allowNull: true, // Adjust according to your needs
      },
      floor: {
        type: Sequelize.STRING, // Added new field
        allowNull: true, // Adjust according to your needs
      },
      workstation: {
        type: Sequelize.STRING, // Added new field
        allowNull: true, // Adjust according to your needs
      },
      anyOtherFurniture: {
        type: Sequelize.STRING, // Added new field
        allowNull: true, // Adjust according to your needs
      },
      rentPerSqFt: {
        type: Sequelize.STRING, // Added new field
        allowNull: true, // Adjust according to your needs
      },
      maintenancePerSqFt: {
        type: Sequelize.STRING, // Added new field
        allowNull: true, // Adjust according to your needs
      },
      deposit: {
        type: Sequelize.STRING, // Added new field
        allowNull: true, // Adjust according to your needs
      },
      yearlyEscalation: {
        type: Sequelize.STRING, // Added new field
        allowNull: true, // Adjust according to your needs
      },
      agreementPeriod: {
        type: Sequelize.STRING, // Added new field
        allowNull: true, // Adjust according to your needs
      },
      lockInPeriod: {
        type: Sequelize.STRING, // Added new field
        allowNull: true, // Adjust according to your needs
      },
      agreementCharges: {
        type: Sequelize.STRING, // Added new field
        allowNull: true, // Adjust according to your needs
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
    await queryInterface.dropTable('AddProperties');
  },
};

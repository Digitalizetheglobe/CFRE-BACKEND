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
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      carpetArea: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      rate: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      cost: {
        type: Sequelize.FLOAT,
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
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cabin: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      conferenceOrMeetingRoom: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      carParking: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bikeParking: {
        type: Sequelize.INTEGER,
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

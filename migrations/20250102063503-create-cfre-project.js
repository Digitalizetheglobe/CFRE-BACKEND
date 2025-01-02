'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CfreProjects', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      projectName: { type: Sequelize.STRING, allowNull: true },
      reraRegdNo: { type: Sequelize.STRING, allowNull: true },
      builderName: { type: Sequelize.STRING, allowNull: true },
      projectDetails: { type: Sequelize.TEXT, allowNull: true },
      price: { type: Sequelize.STRING, allowNull: true },
      area: { type: Sequelize.STRING, allowNull: true },
      projectArea: { type: Sequelize.STRING, allowNull: true },
      possession: { type: Sequelize.STRING, allowNull: true },
      city: { type: Sequelize.STRING, allowNull: true },
      location: { type: Sequelize.STRING, allowNull: true },
      commencementCertificate: { type: Sequelize.STRING, allowNull: true },
      occupancyCertificate: { type: Sequelize.STRING, allowNull: true },
      approvedBy: { type: Sequelize.STRING, allowNull: true },
      specification: { type: Sequelize.TEXT, allowNull: true },
      projectPlans: { type: Sequelize.JSON, allowNull: true },
      amenities: { type: Sequelize.TEXT, allowNull: true },
      floorPlanImages: { type: Sequelize.JSON, allowNull: true },
      video: { type: Sequelize.STRING, allowNull: true },
      virtualVideoTour: { type: Sequelize.STRING, allowNull: true },
      ProjectImages: { type: Sequelize.JSON, allowNull: true },
      slug: { type: Sequelize.STRING, allowNull: true, unique: true },
      discription: { type: Sequelize.TEXT, allowNull: true },
      keyword: { type: Sequelize.STRING, allowNull: true },
      title: { type: Sequelize.STRING, allowNull: true },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CfreProjects');
  }
};

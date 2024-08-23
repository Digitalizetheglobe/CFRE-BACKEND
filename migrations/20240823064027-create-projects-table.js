module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      projectName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      reraRegdNo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      builderName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      projectDetails: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      price: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      area: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      projectArea: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      possession: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      commencementCertificate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      occupancyCertificate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      approvedBy: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      specification: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      projectPlans: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      amenities: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      floorPlanImages: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      video: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      virtualVideoTour: {
        type: Sequelize.STRING,
        allowNull: true,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Projects');
  }
};

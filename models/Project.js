// models/Project.js
module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
      projectName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      reraRegdNo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      builderName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      projectDetails: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      area: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      projectArea: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      possession: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      commencementCertificate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      occupancyCertificate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      approvedBy: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      specification: {
        type: DataTypes.JSON, // Use JSON for MySQL
      },
      projectPlans: {
        type: DataTypes.JSON, // Use JSON for MySQL
      },
      amenities: {
        type: DataTypes.JSON, // Use JSON for MySQL
      },
      floorPlanImages: {
        type: DataTypes.JSON, // Use JSON for multiple images
        allowNull: true,
      },
      video: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      virtualVideoTour: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      availableFor: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    }, {
      timestamps: false
    });
  
    return Project;
  };
  
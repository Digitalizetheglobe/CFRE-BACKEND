// models/Project.js

module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
      projectName: {
        type: DataTypes.STRING,
        allowNull: true, // Field is optional
      },
      reraRegdNo: {
        type: DataTypes.STRING,
        allowNull: true, // Field is optional
      },
      builderName: {
        type: DataTypes.STRING,
        allowNull: true, // Field is optional
      },
      projectDetails: {
        type: DataTypes.TEXT,
        allowNull: true, // Field is optional
      },
      price: {
        type: DataTypes.STRING,
        allowNull: true, // Field is optional
      },
      area: {
        type: DataTypes.STRING,
        allowNull: true, // Field is optional
      },
      projectArea: {
        type: DataTypes.STRING,
        allowNull: true, // Field is optional
      },
      possession: {
        type: DataTypes.STRING,
        allowNull: true, // Field is optional
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true, // Field is optional
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true, // Field is optional
      },
      commencementCertificate: {
        type: DataTypes.STRING,
        allowNull: true, // Field is optional
      },
      occupancyCertificate: {
        type: DataTypes.STRING,
        allowNull: true, // Field is optional
      },
      approvedBy: {
        type: DataTypes.STRING,
        allowNull: true, // Field is optional
      },
      specification: {
        type: DataTypes.TEXT, // Storing multiple points
        allowNull: true, // Field is optional
      },
      projectPlans: {
        type: DataTypes.JSON, // Storing project plans as JSON
        allowNull: true, // Field is optional
      },
      amenities: {
        type: DataTypes.STRING,
        allowNull: true, // Field is optional
      },
      floorPlanImages: {
        type: DataTypes.JSON, // Storing multiple images as JSON
        allowNull: true, // Field is optional
      },
      video: {
        type: DataTypes.STRING, // Storing YouTube video link
        allowNull: true, // Field is optional
      },
      virtualVideoTour: {
        type: DataTypes.STRING, // Storing YouTube video link
        allowNull: true, // Field is optional
      }
    }, {
      timestamps: false // Disabling createdAt and updatedAt fields
    });
  
    return Project;
  };
  
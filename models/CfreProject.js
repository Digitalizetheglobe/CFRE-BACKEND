'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CfreProject extends Model {}

  CfreProject.init(
    {
      projectName: DataTypes.STRING,
      reraRegdNo: DataTypes.STRING,
      builderName: DataTypes.STRING,
      projectDetails: DataTypes.TEXT,
      price: DataTypes.STRING,
      area: DataTypes.STRING,
      projectArea: DataTypes.STRING,
      possession: DataTypes.STRING,
      city: DataTypes.STRING,
      location: DataTypes.STRING,
      commencementCertificate: DataTypes.STRING,
      occupancyCertificate: DataTypes.STRING,
      approvedBy: DataTypes.STRING,
      specification: DataTypes.TEXT,
      projectPlans: {
        type: DataTypes.JSON,
        defaultValue: [],
        get() {
          const rawValue = this.getDataValue('projectPlans');
          return rawValue ? JSON.parse(JSON.stringify(rawValue)) : [];
        },
        set(value) {
          this.setDataValue('projectPlans', JSON.stringify(value));
        }
      },
      amenities: DataTypes.TEXT,
      floorPlanImages: DataTypes.JSON,
      video: DataTypes.STRING,
      virtualVideoTour: DataTypes.STRING,
      ProjectImages: DataTypes.JSON,
      slug: { type: DataTypes.STRING, unique: true },
      discription: DataTypes.TEXT,
      keyword: DataTypes.STRING,
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'CfreProject',
    }
  );

  return CfreProject;
};

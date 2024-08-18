'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PropertyInquiry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PropertyInquiry.init({
    name: DataTypes.STRING,
    mobile: DataTypes.STRING,
    email: DataTypes.STRING,
    propertyName: DataTypes.STRING,
    propertyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PropertyInquiry',
  });
  return PropertyInquiry;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommercialPropertyForSale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CommercialPropertyForSale.init({
    buildingName: DataTypes.STRING,
    unitNumber: DataTypes.STRING,
    floor: DataTypes.INTEGER,
    location: DataTypes.STRING,
    builtUpArea: DataTypes.FLOAT,
    carpetArea: DataTypes.FLOAT,
    reservedCarParking: DataTypes.INTEGER,
    reserved2WheelerParking: DataTypes.INTEGER,
    amenities: DataTypes.TEXT,
    furnishedDetails: DataTypes.JSON,
    pricePerSqFt: DataTypes.FLOAT,
    totalPrice: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'CommercialPropertyForSale',
  });
  return CommercialPropertyForSale;
};
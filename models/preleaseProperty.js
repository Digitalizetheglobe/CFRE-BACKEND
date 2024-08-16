'use strict';
module.exports = (sequelize, DataTypes) => {
  const PreleaseProperty = sequelize.define('PreleaseProperty', {
    buildingName: DataTypes.STRING,
    unitNumber: DataTypes.STRING,
    builtUpArea: DataTypes.FLOAT,
    carpetArea: DataTypes.FLOAT,
    carParking: DataTypes.INTEGER,
    bikeParking: DataTypes.INTEGER,
    location: DataTypes.STRING,
    city: DataTypes.STRING,
    agreementPeriod: DataTypes.INTEGER,
    lockingPeriod: DataTypes.INTEGER,
    rentStartFrom: DataTypes.DATE,
    rentPerMonthPerSqFt: DataTypes.FLOAT,
    deposit: DataTypes.FLOAT,
    yearlyEscalation: DataTypes.FLOAT,
    maintenance: DataTypes.STRING,
    propertyTax: DataTypes.STRING,
    gstOnRent: DataTypes.STRING,
    price: DataTypes.FLOAT,
    furnitureDoneBy: DataTypes.STRING,
  }, {});
  return PreleaseProperty;
};

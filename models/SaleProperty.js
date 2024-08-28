module.exports = (sequelize, DataTypes) => {
  const SaleProperty = sequelize.define('SaleProperty', {
    buildingName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    propertyType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    buArea: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    carpetArea: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cost: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    furnishing: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    purpose: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ws: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cabin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    conferenceOrMeetingRoom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    carParking: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bikeParking: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dgBackup: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    cafeteria: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    bannerImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ratePerSqFt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    basicPrice: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    governmentTaxes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    agreementPeriod: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lockingPeriod: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rentStartFrom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rentPerMonthRsPerSqFt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deposit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    yearlyEscalation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    maintenance: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    propertyTax: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gstOnRent: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    furnitureDoneBy: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  return SaleProperty;
};

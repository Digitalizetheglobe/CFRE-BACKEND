module.exports = (sequelize, DataTypes) => {
    const CommercialPropertyForRent = sequelize.define('CommercialPropertyForRent', {
      buildingName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      unitNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      floor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      builtUpArea: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      carpetArea: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      reservedCarParking: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      reserved2WheelerParking: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      amenities: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      furnishedDetails: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      rentPerSqFt: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      deposit: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      yearlyEscalation: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      agreementPeriod: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lockInPeriod: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      agreementCharges: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      bannerImage: {
        type: DataTypes.STRING,  // Store the URL or file path of the image
        allowNull: true,
      },
    });
  
    return CommercialPropertyForRent;
  };
  
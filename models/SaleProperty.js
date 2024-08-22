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
      aboutProperty: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      unitNo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      floor: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      furnishing: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      builtUpArea: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      carpetArea: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      reservedCarParking: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      reserved2WheelerParking: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      dgBackup: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      cafeteria: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      workstation: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      amenities: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      cabin: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      conferenceRoom: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      anyOtherFurniture: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ratePerSqFt: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      basicPrice: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      governmentTaxes: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    });
  
    return SaleProperty;
  };
  
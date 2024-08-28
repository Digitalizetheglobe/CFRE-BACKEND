module.exports = (sequelize, DataTypes) => {
  const AddProperty = sequelize.define('AddProperty', {
    buildingName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    propertyType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    buArea: {
      type: DataTypes.STRING, // Changed to STRING to allow both numbers and characters
      allowNull: false,
    },
    carpetArea: {
      type: DataTypes.STRING, // Changed to STRING to allow both numbers and characters
      allowNull: false,
    },
    rate: {
      type: DataTypes.STRING, // Changed to STRING to allow both numbers and characters
      allowNull: false,
    },
    cost: {
      type: DataTypes.STRING, // Changed to STRING to allow both numbers and characters
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
      type: DataTypes.STRING, // Changed to STRING to allow both numbers and characters
      allowNull: false,
    },
    cabin: {
      type: DataTypes.STRING, // Changed to STRING to allow both numbers and characters
      allowNull: false,
    },
    conferenceOrMeetingRoom: {
      type: DataTypes.STRING, // Changed to STRING to allow both numbers and characters
      allowNull: false,
    },
    carParking: {
      type: DataTypes.STRING, // Changed to STRING to allow both numbers and characters
      allowNull: false,
    },
    bikeParking: {
      type: DataTypes.STRING, // Changed to STRING to allow both numbers and characters
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
      allowNull: true, // Assuming it's optional
    },
    unitNo: {
      type: DataTypes.STRING, // Added new field
      allowNull: true, // Adjust according to your needs
    },
    floor: {
      type: DataTypes.STRING, // Added new field
      allowNull: true, // Adjust according to your needs
    },
    workstation: {
      type: DataTypes.STRING, // Added new field
      allowNull: true, // Adjust according to your needs
    },
    anyOtherFurniture: {
      type: DataTypes.STRING, // Added new field
      allowNull: true, // Adjust according to your needs
    },
    rentPerSqFtBuiltUpArea: {
      type: DataTypes.STRING, // or the appropriate data type
      allowNull: true, // depending on your requirements
    },    
    maintenancePerSqFtBuiltUpArea: {
      type: DataTypes.STRING, // Added new field
      allowNull: true, // Adjust according to your needs
    },
    deposit: {
      type: DataTypes.STRING, // Added new field
      allowNull: true, // Adjust according to your needs
    },
    yearlyEscalation: {
      type: DataTypes.STRING, // Added new field
      allowNull: true, // Adjust according to your needs
    },
    agreementPeriod: {
      type: DataTypes.STRING, // Added new field
      allowNull: true, // Adjust according to your needs
    },
    lockInPeriod: {
      type: DataTypes.STRING, // Added new field
      allowNull: true, // Adjust according to your needs
    },
    agreementCharges: {
      type: DataTypes.STRING, // Added new field
      allowNull: true, // Adjust according to your needs
    }
  });

  return AddProperty;
};

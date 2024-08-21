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
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      carpetArea: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      rate: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      cost: {
        type: DataTypes.FLOAT,
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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cabin: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      conferenceOrMeetingRoom: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      carParking: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bikeParking: {
        type: DataTypes.INTEGER,
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
    });

    return AddProperty;
};

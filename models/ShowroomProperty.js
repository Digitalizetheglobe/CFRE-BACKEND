module.exports = (sequelize, DataTypes) => {
const ShowroomProperty = sequelize.define('ShowroomProperty', {
    buildingName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    unitNo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    floor: {
        type: DataTypes.STRING,
        allowNull: true
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    builtUpArea: {
        type: DataTypes.STRING,
        allowNull: true
    },
    carpetArea: {
        type: DataTypes.STRING,
        allowNull: true
    },
    reservedCarParking: {
        type: DataTypes.STRING,
        allowNull: true
    },
    reserved2WheelerParking: {
        type: DataTypes.STRING,
        allowNull: true
    },
    height: {
        type: DataTypes.STRING,
        allowNull: true
    },
    mezzanine: {
        type: DataTypes.STRING,
        allowNull: true
    },
    rentPerSqFt: {
        type: DataTypes.STRING,
        allowNull: true
    },
    deposit: {
        type: DataTypes.STRING,
        allowNull: true
    },
    yearlyEscalation: {
        type: DataTypes.STRING,
        allowNull: true
    },
    agreementPeriod: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lockInPeriod: {
        type: DataTypes.STRING,
        allowNull: true
    },
    agreementCharges: {
        type: DataTypes.STRING,
        allowNull: true
    },
    basicPrice: {
        type: DataTypes.STRING,
        allowNull: true
    },
    otherCharges: {
        type: DataTypes.STRING,
        allowNull: true
    },
});

return ShowroomProperty;
}
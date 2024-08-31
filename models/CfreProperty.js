module.exports = (sequelize, DataTypes) => {
  const CfreProperty = sequelize.define('CfreProperty', {
    buildingName: DataTypes.STRING,
    unitNo: DataTypes.STRING,
    propertyType: DataTypes.STRING,
    propertySubtype: DataTypes.STRING,
    floor: DataTypes.STRING,
    location: DataTypes.STRING,
    city: DataTypes.STRING,
    buArea: DataTypes.STRING,
    carpetArea: DataTypes.STRING,
    carParking: DataTypes.STRING,
    bikeParking: DataTypes.STRING,
    dgBackup: DataTypes.STRING,
    cafeteria: DataTypes.STRING,
    furnishing: DataTypes.STRING,
    ws: DataTypes.STRING,
    cabin: DataTypes.STRING,
    conferenceRoom: DataTypes.STRING,
    meetingRoom: DataTypes.STRING,
    otherFurniture: DataTypes.STRING,
    furnitureDoneBy: DataTypes.STRING,
    propertyImage: DataTypes.STRING,
    agreementPeriod: DataTypes.STRING,
    lockingPeriod: DataTypes.STRING,
    rentStartFrom: DataTypes.STRING,
    rentPerMonthRsPerSqFt: DataTypes.STRING,
    deposit: DataTypes.STRING,
    yearlyEscalation: DataTypes.STRING,
    rentPerSqFtBuiltUpArea: DataTypes.STRING,
    maintenancePersqft: DataTypes.STRING,
    agreementCharges: DataTypes.STRING,
    propertyTax: DataTypes.STRING,
    gstOnRent: DataTypes.STRING,
    basePrice: DataTypes.STRING,
    govermentTaxes: DataTypes.STRING,
    seoTitle: DataTypes.STRING,
    seoDiscription: DataTypes.STRING,
    seoKeywords: DataTypes.STRING,
    slug: DataTypes.STRING,
    availableFor: DataTypes.STRING, // New field
    amenities: DataTypes.STRING,    // New field
  });

  return CfreProperty;
};

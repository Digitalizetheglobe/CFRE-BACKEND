module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CfreProperties', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      buildingName: {
        type: Sequelize.STRING,
      },
      unitNo: {
        type: Sequelize.STRING,
      },
      propertyType: {
        type: Sequelize.STRING,
      },
      propertySubtype: {
        type: Sequelize.STRING,
      },
      floor: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      buArea: {
        type: Sequelize.STRING,
      },
      carpetArea: {
        type: Sequelize.STRING,
      },
      carParking: {
        type: Sequelize.STRING,
      },
      bikeParking: {
        type: Sequelize.STRING,
      },
      dgBackup: {
        type: Sequelize.STRING,
      },
      cafeteria: {
        type: Sequelize.STRING,
      },
      furnishing: {
        type: Sequelize.STRING,
      },
      ws: {
        type: Sequelize.STRING,
      },
      cabin: {
        type: Sequelize.STRING,
      },
      conferenceRoom: {
        type: Sequelize.STRING,
      },
      meetingRoom: {
        type: Sequelize.STRING,
      },
      otherFurniture: {
        type: Sequelize.STRING,
      },
      furnitureDoneBy: {
        type: Sequelize.STRING,
      },
      propertyImage: {
        type: Sequelize.STRING,
      },
      agreementPeriod: {
        type: Sequelize.STRING,
      },
      lockingPeriod: {
        type: Sequelize.STRING,
      },
      rentStartFrom: {
        type: Sequelize.STRING,
      },
      rentPerMonthRsPerSqFt: {
        type: Sequelize.STRING,
      },
      deposit: {
        type: Sequelize.STRING,
      },
      yearlyEscalation: {
        type: Sequelize.STRING,
      },
      rentPerSqFtBuiltUpArea: {
        type: Sequelize.STRING,
      },
      maintenancePersqft: {
        type: Sequelize.STRING,
      },
      agreementCharges: {
        type: Sequelize.STRING,
      },
      propertyTax: {
        type: Sequelize.STRING,
      },
      gstOnRent: {
        type: Sequelize.STRING,
      },
      basePrice: {
        type: Sequelize.STRING,
      },
      govermentTaxes: {
        type: Sequelize.STRING,
      },
      seoTitle: {
        type: Sequelize.STRING,
      },
      seoDiscription: {
        type: Sequelize.STRING,
      },
      seoKeywords: {
        type: Sequelize.STRING,
      },
      slug: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CfreProperties');
  },
};

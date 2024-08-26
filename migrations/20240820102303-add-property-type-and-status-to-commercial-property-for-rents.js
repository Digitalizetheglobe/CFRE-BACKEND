'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Check if the column already exists
    const tableInfo = await queryInterface.describeTable('CommercialPropertyForRents');

    if (!tableInfo.propertyType) {
      await queryInterface.addColumn('CommercialPropertyForRents', 'propertyType', {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [['Rent', 'Sale']]
        }
      });
    }

    if (!tableInfo.propertyStatus) {
      await queryInterface.addColumn('CommercialPropertyForRents', 'propertyStatus', {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [['Furnished', 'Unfurnished', 'CoWorking', 'Managed Spaces']]
        }
      });
    }
  },

  async down(queryInterface, Sequelize) {
    // Check if the column exists before removing it
    const tableInfo = await queryInterface.describeTable('CommercialPropertyForRents');

    if (tableInfo.propertyType) {
      await queryInterface.removeColumn('CommercialPropertyForRents', 'propertyType');
    }

    if (tableInfo.propertyStatus) {
      await queryInterface.removeColumn('CommercialPropertyForRents', 'propertyStatus');
    }
  }
};

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('CommercialPropertyForRents', 'propertyType', {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isIn: [['Rent', 'Sale']]
      }
    });

    await queryInterface.addColumn('CommercialPropertyForRents', 'propertyStatus', {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isIn: [['Furnished', 'Unfurnished', 'CoWorking', 'Managed Spaces']]
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('CommercialPropertyForRents', 'propertyType');
    await queryInterface.removeColumn('CommercialPropertyForRents', 'propertyStatus');
  }
};
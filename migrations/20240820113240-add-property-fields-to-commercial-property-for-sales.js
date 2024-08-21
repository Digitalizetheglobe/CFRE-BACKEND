'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('CommercialPropertyForSales', 'propertyType', {
      type: Sequelize.STRING, // or Sequelize.STRING(255) for a specific length
      allowNull: true, // or false if you want to make it mandatory
    });
    
    await queryInterface.addColumn('CommercialPropertyForSales', 'propertyStatus', {
      type: Sequelize.STRING, // or Sequelize.STRING(255) for a specific length
      allowNull: true, // or false if you want to make it mandatory
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('CommercialPropertyForSales', 'propertyType');
    await queryInterface.removeColumn('CommercialPropertyForSales', 'propertyStatus');
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('CfreProperties', 'images', {
      type: Sequelize.JSON,  // Use JSON to store multiple images as an array
      allowNull: true,       // You can decide whether this field should be nullable
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('CfreProperties', 'images');
  }
};

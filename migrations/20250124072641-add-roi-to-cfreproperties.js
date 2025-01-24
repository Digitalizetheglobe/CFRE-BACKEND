'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('CfreProperties', 'Roi', {
      type: Sequelize.STRING,
      allowNull: true, // Makes the field optional
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('CfreProperties', 'Roi');
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('CfreProjects', 'availableFor', {
      type: Sequelize.STRING,
      allowNull: true,
      after: 'virtualVideoTour'  // This will place the column after virtualVideoTour in the table
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('CfreProjects', 'availableFor');
  }
};

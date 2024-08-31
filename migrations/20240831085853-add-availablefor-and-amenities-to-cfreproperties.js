module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('CfreProperties', 'availableFor', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('CfreProperties', 'amenities', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('CfreProperties', 'availableFor');
    await queryInterface.removeColumn('CfreProperties', 'amenities');
  },
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('CfreProperties', 'multiplePropertyImages', {
      type: Sequelize.JSON, // Using JSON for storing multiple images
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('CfreProperties', 'multiplePropertyImages');
  },
};

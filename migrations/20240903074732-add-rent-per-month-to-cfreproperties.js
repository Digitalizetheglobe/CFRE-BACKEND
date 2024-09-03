module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('CfreProperties', 'rentPerMonth', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('CfreProperties', 'aboutProperty', {
      type: Sequelize.TEXT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('CfreProperties', 'rentPerMonth');
    await queryInterface.removeColumn('CfreProperties', 'aboutProperty');
  },
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tableInfo = await queryInterface.describeTable('commercialpropertyforrents');
    if (!tableInfo.city) {
      await queryInterface.addColumn('commercialpropertyforrents', 'city', {
        type: Sequelize.STRING,
        allowNull: false,
      });
    }
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('commercialpropertyforrents', 'city');
  }
};

// migrations/XXXXXX-update-project-specifications.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Projects', 'specification', {
      type: Sequelize.JSON,
      allowNull: true,
    });
    await queryInterface.changeColumn('Projects', 'projectPlans', {
      type: Sequelize.JSON,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Projects', 'specification', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('Projects', 'projectPlans', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('Projects', 'amenities', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};

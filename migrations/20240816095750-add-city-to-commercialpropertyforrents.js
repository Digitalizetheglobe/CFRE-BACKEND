'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE CommercialPropertyForRents
      ADD COLUMN city VARCHAR(255) NULL;
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE CommercialPropertyForRents
      DROP COLUMN city;
    `);
  }
};

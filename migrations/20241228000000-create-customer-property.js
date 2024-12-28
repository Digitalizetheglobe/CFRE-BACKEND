// migrations/20241228000000-create-customer-property.js
'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('customer_properties', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        selected_property: {
          type: Sequelize.STRING,
          allowNull: true
        },
        property_subtype: {
          type: Sequelize.STRING,
          allowNull: true
        },
        full_name: {
          type: Sequelize.STRING,
          allowNull: true
        },
        email: {
          type: Sequelize.STRING,
          allowNull: true
        },
        mobile_number: {
          type: Sequelize.STRING,
          allowNull: true
        },
        building_name: {
          type: Sequelize.STRING,
          allowNull: true
        },
        location: {
          type: Sequelize.STRING,
          allowNull: true
        },
        city: {
          type: Sequelize.STRING,
          allowNull: true
        },
        carpet_area: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        built_up_area: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        floor_number: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        unit_number: {
          type: Sequelize.STRING,
          allowNull: true
        },
        rent_per_month: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        cost: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        message: {
          type: Sequelize.TEXT,
          allowNull: true
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        }
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('customer_properties');
    }
  };
  
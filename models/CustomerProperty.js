// models/CustomerProperty.js

module.exports = (sequelize, DataTypes) => {
    const CustomerProperty = sequelize.define('CustomerProperty', {
      selected_property: {
        type: DataTypes.STRING,
        allowNull: true
      },
      property_subtype: {
        type: DataTypes.STRING,
        allowNull: true
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      mobile_number: {
        type: DataTypes.STRING,
        allowNull: true
      },
      building_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true
      },
      carpet_area: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      built_up_area: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      floor_number: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      unit_number: {
        type: DataTypes.STRING,
        allowNull: true
      },
      rent_per_month: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      cost: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });
  
    CustomerProperty.associate = function(models) {
      // Define associations here if needed
    };
  
    return CustomerProperty;
  };
  
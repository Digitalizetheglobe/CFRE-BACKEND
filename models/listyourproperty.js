'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListYourProperty = sequelize.define(
    'ListYourProperty',
    {
      type_of_space: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      building_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      locality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      carpet_area: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      build_up_area: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      floor_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      unit_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rent_per_month: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  return ListYourProperty;
};

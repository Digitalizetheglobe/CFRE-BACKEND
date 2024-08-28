// models/ContactForm.js
module.exports = (sequelize, DataTypes) => {
    const ContactForm = sequelize.define('ContactForm', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mobileNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });
    return ContactForm;
  };
  
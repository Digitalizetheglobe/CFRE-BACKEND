const { Sequelize } = require('sequelize');

// Create a new Sequelize instance with the production configuration
const sequelize = new Sequelize('cfre_main', 'new_cfre_user', 'Str0ng_P@ssw0rd!', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been ne established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

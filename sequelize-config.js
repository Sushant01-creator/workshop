const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('workshop_db', 'postgres', '12345', {
    host: 'localhost',
    dialect: 'postgres'
  });

  module.exports = sequelize;
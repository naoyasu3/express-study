const Sequelize = require('sequelize/index');

const sequelize = new Sequelize('node-complete', 'root', 'kaisen29', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;

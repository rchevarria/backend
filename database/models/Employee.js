const Sequelize = require('sequelize');
const db = require('../db');

const Employee = db.define("employee", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  department: {
    type: Sequelize.STRING,
  },

  imageUrl: {
    type: Sequelize.STRING,
  }


});

module.exports = Employee;

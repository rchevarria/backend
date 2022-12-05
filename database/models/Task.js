const Sequelize = require('sequelize');
const db = require('../db');

const Task = db.define("task", {

  title: {
    type: Sequelize.STRING,
    allowNull: false
  },

  timeslot: {
    type: Sequelize.STRING
  },

  location: {
    type: Sequelize.STRING
  },

  // isOpen: {
  //   type: Sequelize.BOOLEAN,
  //   allowNull: false,
  //   defaultValue: true
  // }

});

module.exports = Task;

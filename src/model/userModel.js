const { Sequelize } = require('sequelize');
const dbUtile = require('../utile/db')
const db = dbUtile.newDataBase()
let userModel = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  user_name: {
    type: Sequelize.STRING(25),
    allowNull: true,
  },
  pass_word:{
    type: Sequelize.STRING(25),
    allowNull: true,
  },
  head_portrait:{
    type: Sequelize.STRING(240),
  },
  telephone_number:{
    type: Sequelize.STRING(25),
  },
  mailbox_number:{
    type: Sequelize.STRING(25),
  },
  jurisdiction:{
    type: Sequelize.INTEGER,
  },
  personal_signature:{
    type: Sequelize.STRING(500),
  }
})

module.exports = userModel;
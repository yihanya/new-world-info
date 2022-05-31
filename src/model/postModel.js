const { Sequelize } = require('sequelize');
const dbUtile = require('../utile/db')
const db = dbUtile.newDataBase()
let postModel = db.define('post', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  user_id:{
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  text:{
    allowNull: false,
    type: Sequelize.TEXT,
  },
})

module.exports = postModel;
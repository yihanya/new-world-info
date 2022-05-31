//数据库工具类
const dbUtile = require('../utile/db')
//获取数据库链接
let db = dbUtile.newDataBase();
//用户dao层
let userDao = {}
//用户模型
const userModle = require("../model/userModel")
//dao层实现
userDao.getAllUser = async () => {

}
userDao.getUser = async (type, field) => {
  let user = {};
  [user,] = await db.query(`select * from users where ${type} = ${'"' + field + '"'}`)
  console.log(user);
  return user[0]
}
userDao.addUser = async (userModel) => {
 let addInfo = await userModle.create(userModel)
 console.log(addInfo);
}
userDao.delUser = async (id) => {

}
userDao.upUser = async () => {

}
module.exports = userDao;
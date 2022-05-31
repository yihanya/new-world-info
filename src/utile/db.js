const { Sequelize } = require('sequelize');
let dbUtile = {}
dbUtile.newDataBase = () => {
  const sequelize = new Sequelize('time_inn', 'root', 'root', {
    host: 'localhost', //数据库地址
    dialect: 'mysql', //指定连接的数据库类型
    pool: {
      max: 5, //连接池最大连接数量
      min: 0, //最小连接数量
      idle: 10000, //如果一个线程 10秒内么有被使用过的话，就释放
    },
    define: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', 
      timestamps: true
    },
  })
  return sequelize;
}
dbUtile.isInit = async (sequelize) => {
  let str1
  str1 = await sequelize
    .authenticate()
    .then(() => {
      // console.log("连接数据库成功");
      return true
    })
    .catch(err => {
      // console.log('连接数据库失败' + err);
      return false
    });
  // console.log(str1);
}
module.exports = dbUtile;
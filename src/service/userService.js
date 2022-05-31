const userDao = require('../dao/userDao');
const logsFile = require("../utile/logs.js").logHandle
let userService = {};

userService.login = async (loginData) => {
  let returnData = { data: null, code: "", msg: "" };
  //执行
  try {
    //执行数据库
    returnData.data = await userDao.getUser("user_name", loginData.userName);
    // console.log(returnData.data[0][0]);
    if (returnData.data.pass_word == undefined) {
      return { code: "700", msg: "找不到该用户", data: null }
    }
    if (loginData.passWord == returnData.data.pass_word) {
      returnData.code = "200";
      returnData.msg = "登陆成功"
    } else {
      returnData.code = "700";
      returnData.msg = "密码错误";
    }
  } catch (error) {
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}

userService.register = async (registerData) => {
  let returnData = { data: "", code: "", msg: "" };
  //执行
  try {
    let obj = await userDao.getUser("user_name", registerData.userName);
    if (obj.userName !== registerData.userName) {
      //执行数据库
      returnData.data = userDao.addUser(registerData);
      returnData.code = "200";
      returnData.msg = "注册成功"
    }else{
      returnData.code = "700";
      returnData.msg = "注册失败"
    }
    return returnData;
  } catch (error) {
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
  }
  return returnData;
}
module.exports = userService;
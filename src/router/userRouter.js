
const Router = require("koa-router");
const userRouter = new Router();
const userService = require("../service/userService")
const bodyParser = require('koa-bodyparser');
//接口
userRouter.use(bodyParser())
/**
 * 
 * @api {post} /user/login 用户登录
 * @apiName 用户登录
 * @apiGroup 用户
 * @apiDescription 登录用户返回token和用户信息
 * @apiVersion  1.0.0
 * 
 * @apiParam {String} userName=''  用户名
 * @apiParam {String} passWord=''  密码
 * @apiParamExample  {type} Request-Example:
 * {
 *     userName:"yihanya"
 *     passWord:"LYX@2415."
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 用户信息
 * @apiSuccess {String} msg  登录成功
 * @apiSuccessExample {type} Response-Example:
 * {
 *  code: 200,
 *  msg: "登录成功"
 *  data: {
 *    name: '',
 *    age: '',
 *    sex: '',
 *    ...
 *  }
 * }
 * 
 */
userRouter.post('/login', async (ctx) => {
  let returnData = { code: "200", msg: "登录成功", data: "" };
  let loginData = ctx.request.body;
  try {
    //执行业务
    let serviceData = await userService.login(loginData);
    console.log("serviceData");
    console.log(serviceData);
    returnData.data = serviceData.data;
    returnData.code = serviceData.code;
    returnData.msg = serviceData.msg;
  } catch (error) {
    console.log(error);
    returnData.code = '500'
  }
  ctx.body = returnData; 
})
/**
 * 
 * @api {post} /user/login 用户注册
 * @apiName 用户注册
 * @apiGroup 用户
 * @apiDescription 返回用户信息和token
 * @apiVersion  1.0.0
 * 
 * @apiParam {String} userName=''  用户名
 * @apiParam {String} passWord1=''  密码
 * @apiParam {String} passWord2=''  确认密码
 * @apiParamExample  {type} Request-Example:
 * {
 *     userName:"yihanya"
 *     passWord1:"LYX@2415."
 *     passWord2:"LYX@2415."
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 用户信息
 * @apiSuccess {String} msg  注册成功
 * @apiSuccessExample {type} Response-Example:
 * {
 *  code: 200,
 *  msg: "注册成功"
 *  data: {
 *    name: '',
 *    age: '',
 *    sex: '',
 *    ...
 *  }
 * }
 * 
 */
userRouter.post('/register', async (ctx) => {
  //返回数据
  let returnData = { code: "200", msg: "注册成功", data: "" };
  let registerData = ctx.request.body;
  try {
    //执行业务
    let serviceData = userService.register(registerData)
    returnData.data = serviceData.data
    returnData.code = serviceData.code;
    returnData.msg = serviceData.msg;
  } catch (error) {
    console.log(error);
    returnData.code = '600'
    returnData.msg = "执行业务发生异常"
  }
  ctx.body = returnData;
})

module.exports = userRouter;
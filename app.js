//入口文件
const Koa = require("koa2");
const cors = require('koa-cors')
const router = require('./src/router/index')
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');   // 导入koa-static包
const path = require('path');            // 导入path包 用于拼接路径
const logsUtil = require('./src/utile/logs');
const port = 8080;

//模型
const userModle = require("./src/model/userModel")
//声明实例
const app = new Koa();
app.use(async (ctx, next) => {
    const start = new Date();					          // 响应开始时间
    let intervals;								              // 响应间隔时间
    try {
        await next();
        intervals = new Date() - start;
        logsUtil.logResponse(ctx, intervals);	  //记录响应日志
    } catch (error) {
        intervals = new Date() - start;
        logsUtil.logError(ctx, error, intervals);//记录异常日志
    }
})
app.use(cors()) //使用cors解决跨域
app.use(router.routes(), router.allowedMethods());
app.use(bodyParser())

app.use(static(path.join(__dirname + '/apidoc'),  // 开放的文件夹 __dirname为当前运行文件的目录  目前看来 只能开放文件夹 无法开放单独一个文件
  {
    index: false,       // 默认为true  访问的文件为index.html  可以修改为别的文件名或者false
    hidden: false,      // 是否同意传输隐藏文件
    defer: true,		   // 如果为true，则在返回next()之后进行服务，从而允许后续中间件先进行响应
  }
))

app.listen(port, async () => {
  console.log("服务启动于" + "http://localhost:" + port);
  //同步数据库
  await userModle.sync();
})

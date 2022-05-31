const Router = require("koa-router");
const router = new Router();
const userRouter = require("./userRouter");
router.get('/',async (ctx)=>{
   ctx.body = "oj-koa2-接口"
})
router.get('/api',async (ctx)=>{
  ctx.body = "oj-koa2-接口"
})
router.use('/user',userRouter.routes(),userRouter.allowedMethods());
module.exports = router;
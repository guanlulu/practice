const Koa = require('koa')
const app = new Koa()

const router = require('./router')

app.listen(4000)
console.log('app listen at 4000...')
const handler = async (ctx, next) => {
    if(ctx.request.path == '/err') return 
    
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Methods", "*");
    ctx.set("Access-Control-Allow-Headers", "*");
    if (ctx.request.method == "OPTIONS") {
        ctx.response.status = 200
    }
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    try {
      await next();
      console.log('handler通过')
    } catch (err) {
      console.log('handler处理错误')
      ctx.response.status = err.statusCode || err.status || 500;
      ctx.response.body = {
        message: err.message
      };
    }
  };
app.use(handler) // 中间件
app.use(router.routes())
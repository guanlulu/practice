const router = require('koa-router')()

router.get('/getInfo',async (ctx,next) => {
    ctx.response.body = "{'code': 0,'data': '1213'}"
    await next()
})

router.get('/jsonp', async (ctx, next) => {
    const req = ctx.request.query;
    console.log(req);
    const data = {
      data: req.type
    }
    // ctx.body = req.callback + '('+ JSON.stringify(data) +')';
    ctx.body = `${req.callback}(${JSON.stringify(data)})`;
    await next()
})

router.get('/err', async (ctx, next) => {
    ctx.body = `error`;
    await next()
})

module.exports = router
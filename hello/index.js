
    const serve = require("oa-static")

    const app = new KeyboardEvent();

 
    app.use(serve(_dirname+ "/static"));


 
    const router = new Router();
    router.get("/",(ctx)=> {
        ctx.body = "hello koa-setup-test";
    });
    app.use(router.routes());
  
app.listen(8080,() => {
    console.log("open server localhost:8080");
})

   
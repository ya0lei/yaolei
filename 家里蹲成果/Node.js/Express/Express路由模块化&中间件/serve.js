// 服务器,调用路由模块页面
const express = require("express"); // 导入快
const app = express(); // 创建服务器
// 导入路由模块
// 虽然.js会被补全,但是,写了好
const router = require("./router.js");
// 我的格局还是小了,只要是路由创建和运行服务器之间的操作,都可以理解为搅屎棍,所有绑再app上的都可以叫做中间件
(function 全局中间件() {
  // 中间件,请求 → 搅屎棍 → 响应,这个搅屎棍就是中间件,有点像axios的请求拦截;注意:没有请求搅屎棍就无屎可搅,也可以把中间件理解成无论get,post都会执行的请求函数,并且与所有人共享数据
  // 中间件比请求函数多了next,表示这根已经沾了屎了,换下一根
  // 中间件使用app.use()注册全局调用
  // 创建一个最简单的中间件
  const mv = function (req, res, next) {
    console.log("我是一个全局中间件");
    // 定义一个时间,这个时间是请求一被接收就得到现在进行时
    const time = Date.now();
    // 数据共享仅限req,res,所以,挂载
    req.time = time;
    // next进入下一个流程,可能是一个中间件或者响应
    next();
  };
  // 注册全局中间件;注意:可以提前把棍子放马桶里
  // 可以定义多个全局中间件,从上到下执行
  app.use(mv);
})();
(function 局部中间件() {
  // 定义局部中间件
  const mv1 = function (req, res, next) {
    console.log("我是url=bbb的局部中间件");
    // 响应体挂个数据过去给客户端
    // res.hello = "我是url=bbb的局部中间件";
    // 忘记停止🥲
    next();
  };
  // 定义局部中间件2
  const mv2 = function (req, res, next) {
    console.log("我是url=bbb的局部中间件2号");
    res.hello += " 我是url=bbb的局部中间件2号";
    next();
  };
  // 写个url=bbb时的路由
  // 中间件可以多个,可以使用[]包裹,更清晰,也可以不用[]!!!!
  app.get("/bbb", [mv1, mv2], (req, res) => {
    // 忘记send😅客户端一直等待
    res.send("url=bbb的请求执行了" + res.hello);
  });
})();

(function 五种中间件() {
  // 1.托管静态资源,这里就不赘述了

  // 2.解析JSON的请求体数据
  // 不加这个,res.body=undefined
  // 就一句话?全局挂载就完事了,post的请求体body可以拿到了(req.body)
  app.use(express.json());

  // 3.解析URL-encoded格式的请求体数据
  // 不加这个,res.body=空{}
  app.use(express.urlencoded({ extended: false })); //固定写法

  // 0000.先来个请求,不然太麻烦
  app.post("/ccc", (req, res) => {
    // throw new Error("抛个错误玩玩")
    // req.body可以拿到请求对象的请求体
    res.send("ccc响应数据成功");
    console.log(req.body); //拿到body了
  });
  // 4.错误级别
  // 特点:多了一个err
  // 注意:中间件上到下,记得这玩意写最后才能全捕捉
  // 抛出错误,还记得不: throw new Error("抛个错误玩玩")
  app.use(function (err, req, res, next) {
    console.log("错啦错啦" + err.message); // 服务器中打印
    res.send("Error!" + err.message); // 给客户端也整个
    next();
  });
})();
//  注册路由模块
// app.use用来注册全局中间件
// app.use(router) // 这种用户太轻松
app.use("/aaa", router); //这种可以让用户多输入一个abc
app.listen(80, function () {
  console.log("http://127.0.0.1");
}); //启动服务器

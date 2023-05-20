// Express,基于Node的开发框架,用来创建服务器
// 使用它首先:npm i express@4.17.1
//导入//必须项1
const express = require("express");
// 创建服务器//必须项2
const app = express();
// 配置下跨域
// 下载引入全局注册cors
// post请求体是json和urlencoded也给我拿
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// 监听GET请求
// 路由是从上到下匹配的
app.get("/user", function (req, res) {
  //发送数据给客户端
  res.send({
    state: 2000,
    message: "get user 请求成功",
    query: req.query,
    params: req.params,
  });
});
// 监听GET的JSONP请求
app.get("/jsonp", (req, res) => {
  let argument = req.query.callback; // 拿到用户传来的callback
  // console.log(argument);
  //定义响应的数据对象
  let data = {
    state: 2000,
    message: "JSONP请求响应成功",
    query: argument,
  };
  // 根据callback发送指定的函数调用
  if (argument === "aaa") {
    data.message += ",调用了名为aaa的callback函数";
    data = JSON.stringify(data);
    return res.send(`aaa(${data})`);
  } else if (argument === "bbb") {
    data.message += ",调用了名为bbb的callback函数";
    data = JSON.stringify(data);
    return res.send(`bbb(${data})`);
  } else {
    data.message += ",找不到当前的callback函数";
    return res.send(data); //拿不到callback,本地JSONP无法得到这条数据,postman可以查看错误
  }
});
// 参数1:请求url地址,req:请求体 res:响应体
app.get("/", function (req, res) {
  // req.query可以访问url后的查询字符串?name=zs&age=20
  // 客户端不传值为空{}
  // req.params可以访问url后的动态参数:id
  // res.send(req.query);
  res.send({
    state: 2000,
    message: "get普通请求成功",
    query: req.query,
    params: req.params,
  });
});
// /:id匹配动态参数,这个动态参数可以匹配多个,这就有点离谱了
app.get("/:id", function (req, res) {
  // req.params可以访问url后的动态参数:id
  // 客户端不传值为空{}
  res.send({
    state: 2000,
    message: "get携带动态参数请求成功",
    query: req.query,
    params: req.params,
  });
});

// 监听POST
app.post("/", function (req, res) {
  res.send({
    state: 2001,
    message: "post请求成功",
    body: req.body,
  });
});

// 启动服务器//必须项3
app.listen(80, () => {
  console.log("express server running at http://127.0.0.1");
});

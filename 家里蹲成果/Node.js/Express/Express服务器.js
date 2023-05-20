// Express,基于Node的开发框架,用来创建服务器
// 使用它首先:npm i express@4.17.1
//导入//必须项1
const express = require("express");
// 创建服务器//必须项2
const app = express();
// 监听GET请求
// 参数1:请求url地址,req:请求体 res:响应体
app.get("/", function (req, res) {
  // req.query可以访问url后的查询字符串?name=zs&age=20
  // 客户端不传值为空{}
  // req.params可以访问url后的动态参数:id
  res.send(req.query);
});
// /:id匹配动态参数,这个动态参数可以匹配多个,这就有点离谱了
app.get("/:id/:id2", function (req, res) {
  // req.params可以访问url后的动态参数:id
  // 客户端不传值为空{}
  res.send(req.params);
});

app.get("/user", function (req, res) {
  //发送数据给客户端
  res.send("GET okk");
});
// 监听POST
app.post("/user", function (req, res) {
  res.send("POST okk");
});
// 启动服务器//必须项3
app.listen(80, () => {
  console.log("express server running at http://127.0.0.1");
});

// 导入,拿到router,输出
const express = require("express");
const routerApi = express.Router();
// GET接口
// 这里第一个参数是url/后面的url,不是methods,别搞混了
routerApi.get("/get", (req, res) => {
  // 获取请求对象req的查询字符串
  const query = req.query;
  // 发数据给客户端
  res.send({
    states: 20000,
    msg: "GET请求成功啦",
    data: query,
  });
});
//  POST接口,注意post请求体载req.body中,不再和get一样拼接在url后面
routerApi.post("/post", (req, res) => {
  // 获取请求对象req的请求体
  const body = req.body;
  // 发数据给客户端
  res.send({
    states: 20000,
    msg: "POST请求成功啦",
    data: body
  });
});
module.exports = routerApi;

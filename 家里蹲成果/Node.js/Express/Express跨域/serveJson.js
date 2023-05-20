// 单独开一个,使用JSONP来请求数据
const express = require("express");
const app = express();
// 用户发送GET请求,url=/json时,触发这个路由
app.get("/json", (req, res) => {
  // 让用户传一个 ?callbackFn=fnName,服务端用req.query查询字符串.callbackFn获取fnName
  const fnName = req.query.callbackFn;
  // 定义一个发给用户的数据对象
  const data = {
    name: "我是JSONP哥哥",
    like: "我最喜欢GET,悄悄告诉你,我能跨域哦",
  };
  //   把函数调用变成JSON字符串的形式
  // const fnStr=`fn(data)` ↓
  const fnStr = `${fnName}(${JSON.stringify(data)})`;
  // 把处理好的函数调用发给客户端
  res.send(fnStr);
});
app.listen(80, () => {
  console.log("http://127.0.0.1");
});

// 导入,创服务器,启动,引入路由模块并全局注册
const express = require("express");
const app = express();

//Node的框架Express的中间件CORS解决跨域 cors:跨域资源共享
// 1.npm i cors 
// 导入cors,全局注册
// 我简直都不敢相信,这么简单就成功了
const cors = require('cors');
app.use(cors())

// 搞两个全局中间件,不然req.body数据格式无法解析
app.use(express.json());
app.use(express.urlencoded({ extended: false}))
const routerApi = require("./routerApi.js");
app.use(routerApi);
app.listen(80, function () {
  console.log("http://127.0.0.1");
});

// 路由:对应关系,这里是请求url和处理函数的对应关系
// 将路由封装下,美其名曰模块化
const express = require("express"); // 导入快
const router = express.Router(); // 创建路由对象

// 挂载路由1.获取用户列表
router.get("/user/list", function (req, res) {
  res.send("我是用户列表;" + "请求时间:" + req.time);
});

// 挂载路由2.添加用户
router.post("/user/add", function (req, res) {
  res.send("我会添加用户");
});

// 把路由对象暴露出去
module.exports = router;

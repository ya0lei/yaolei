const http = require("http");
const fs = require("fs");
const path = require("path");
let serve = http.createServer();
// 监听请求方法 req:请求对象 res:响应对象
serve.on("request", (req, res) => {
  const url = req.url;

  // 根据fPath来读取文件,GET!!
  if (req.method === "GET") {
    res.end("GET请求成功")
  }

  // fs可以向指定的文件写入内容,卧槽?POST!
  if (req.method === "POST") {
    fs.writeFile("./database/1.txt", "fs写入的内容,你能看到我,说明POST成功了", (err) => {
      // 写入成功,err=null
      // 写入失败,err=错误对象
      console.log(err);
      res.end("POST创建成功")
    });
  }
});
// 启动服务器
serve.listen(80, () => {
  console.log("serve running at http://127.0.0.1");
});

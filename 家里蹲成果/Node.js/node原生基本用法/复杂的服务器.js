const http = require("http");
// 导入fs模块,处理文件
const fs = require("fs");
// 导入path模块,处理文件路径
const path = require("path");
// 创建服务器
let serve = http.createServer();
// 监听请求方法 req:请求对象 res:响应对象
serve.on("request", (req, res) => {
  const url = req.url;
  // 我们让req.url等于文件名,用户发什么url,我们拿对应文件给他
  // __dirname指当前文件所处的父级文件夹
  // 使用path.join方法将当前文件所处文件夹与url拼接,()有几个拼几个
  // 再优化下这个fPath,如果用户啥也不输,url="/"的时候,咱给他定到index页面,因为我们的数据都在数据库,为了每次用户输入网址不要那么繁琐,我们自主给他拼接下

  let fPath = "";
  if (url === "/") {
    fPath = path.join(__dirname, "/database", "/index.html");
  } else {
    fPath = path.join(__dirname, "/database", url);
  }

  // 根据fPath来读取文件,GET!!
  if (req.method === "GET") {
    fs.readFile(fPath, "utf8", (err, data) => {
      // 读取文件失败后,向客户端响应"错误信息"
      if (err) return res.end("404 404 404");
      // 读取文件成功后,向客户端响应"成功数据"
      res.end(data);
    });
  }

  // fs可以向指定的文件写入内容,卧槽?POST!
  if (req.method === "POST") {
    // 参数1,文件的存放位置,可以新建文件,已有文件则会修改内容
    // 参数1是绝对位置,node解析完整地址:执行node时所在的文件 + ./文件名,所以要注意了,如果执行node时的所在文件是爷爷级,会报错;爸爸级可以省略./,直接写文件名
    // 直接写./或者../node解析容易出错,我们可以使用绝对路径c:\\user\\;注意:\代表转义,所以要\\,从盘符开始的绝对路径是\分隔的,基础班学过
    // 写绝对路径太麻烦,而且不同电脑运行会有问题,更好的方案:__dirname,__dirname指向当前文件所在的父级
    fs.writeFile("./database/1.txt", "fs写入的内容,你能看到我,说明POST成功了", (err) => {
      // 写入成功,err=null
      // 写入失败,err=错误对象
      console.log(err);
    });
  }
});
// 启动服务器
serve.listen(80, () => {
  console.log("serve running at http://127.0.0.1");
});

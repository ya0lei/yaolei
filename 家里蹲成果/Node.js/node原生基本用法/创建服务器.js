// API属于环境,在什么环境就可以使用什么API,等下我们要用node跑js,所以我们可以用node的API
// 服务器就是一台负责提供数据的电脑
// 用Node来创建服务器

// require(文件),
//如果是内置模块,直接拿,优先级最高
// 如果是第三方模块,就逐级向上找node_modules,看看有没有想要的模块,没有再上一层找node_modules
// 如果是自定义模块,记得加./,不然他以为是别的模块
// 如果是文件夹,去找package.json文件里看main指向谁,指谁拿谁;没有package.json,找index.js;一般来说,package.json指向的也就是index.js;如果都找不到,对不起,报错
// 导入http模块
const http = require("http");
// 使用http的方法来创建服务器
const serve = http.createServer();
// 给服务器绑定事件
// req是请求对象,里面是客户端的信息,如请求方式,请求什么文件
// res是响应对象,包含服务器的数据和属性
serve.on("request", (req, res) => {
  // 不要轻易打印req,会变得不幸
  console.log(
    "请求对象req的url地址:" +
      req.url +
      "\n" +
      "请求对象req的请求方式:" +
      req.method
  );
  //   根据用户传来的url来展示相应的内容
  let url = req.url;
  let content = "";
  if (url === "/" || url === "/index") {
    content = "<h2>欢迎来到主页<h2>";
  } else if (url === "/user") {
    content = "<h3>欢迎来到用户页<h3>";
  } else {
    content = "<h3>欢迎来到404<h3>";
  }

  //   设置响应头,不让中文变乱码
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  //结束这次请求,并发点内容
  //  传过去的内容会按innerHTML解析
  res.end("恭喜你啊,终于创建了服务器,感谢黑马!!!" + content);
});
// 让服务器运行在80端口
serve.listen(80, () => {
  console.log("serve running at http://127.0.0.1");
});
// 简单的服务器就是这样了
// 在终端输入 node xxx.js,可以在node下运行js文件,同时得到这个服务器的网址(这他妈是我自己打印的)
// 可以Ctrl+鼠标左键 打开网址
// 网页一打开会发送GET请求,然后被serve的request监听到,执行我们写的代码
// 由于浏览器只可以GET,想要POST可以使用post man

// 给worker写个脚本
let i = 0;
// 自加函数
// 这里函数必须加引号,不然报错,不知道为啥
function timedCount() {
  i++;
  //   发送信息给worker
  postMessage(i);
  setTimeout("timedCount()", 500);
}
// 调用
timedCount();

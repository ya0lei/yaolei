// 导入封装的方法
let yaolei = require("./src/yaolei");
// 向外暴露方法
module.exports = {
  // 方法传过来的是{fn},所以要...展开
  ...yaolei,
};



// 导出
console.log("你好,我是导出,如果你能看到我,恭喜你,说明我被执行了");
// 别的家伙导入我,会执行我的js,但是没有返回值,就像函数,为了返回值,我们需要return,在node中,这个return就是module.exports,可以在module上挂载属性和方法,这样就能把数据return出去了,module.exports可以简写为exports
let a = "我是aaa";
module.exports.a = a;
module.exports.b = "我是bbb";

// 上面这个属于挂载,会默认输出
// 下面这个,"exports="重新赋值,会覆盖前面的数据,用exports.a的方式可以一个个添加

module.exports = [1, 2, 3, 4];
module.exports = { name: "姚磊" };
module.exports.c = "我是ccc";
// 可以挂方法
module.exports.fn = function (a) {
  console.log("给老子打印" + a);
};

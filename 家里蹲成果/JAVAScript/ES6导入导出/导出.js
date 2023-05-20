let a = "我是a";
let b = "我是b";
let c = "我是c";
let fn = function 函数() {
  console.log(11111);
};

// 默认导出
// 默认导出只能出现一次
export default {
  a,
  b,
  fn,
};

// 按需导出
export let aa = "我是按需的啊啊";
export let bb = "我是按需的爸爸";
export let cc = "我是按需的成成";
export function fn2() {
  console.log(222222222222);
}

// 这个js被导入js import引入就执行了
  console.log(1234565);


// 导入
// 需要aaa.js,require会直接导入并运行aaa.js,.js可以不写,node会自动补全
// require和script src引入js不同,script内容是共享的,require有着函数作用域一样的模块作用域,就算是var声明的变量,两个require也是无法访问对方的var的
let aaa=require('./导出.js') 
console.log(1111111111111,aaa);


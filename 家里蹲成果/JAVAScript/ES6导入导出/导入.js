// 默认导入
// import mv from './导出.js';
// console.log(mv);

// 按需导入
// import {cc} from './导出.js'
// 可以按需导入多个成员,可以as重命名,可以使用info接收默认导出的成员
import info, {aa,bb as nameB} from './导出.js'  

console.log(info,aa,nameB);

// 只想执行别的模块(js文件)的代码,不想导入
// 可以和导入并存
import './导出.js'

// 试试能不能导个moment,ok的
import moment from'moment'
console.log(moment());
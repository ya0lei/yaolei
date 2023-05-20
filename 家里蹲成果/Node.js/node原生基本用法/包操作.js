// 先npm install moment
// 导入时间格式化包
const moment=require('moment');
// moment()此刻  format(格式)格式化
const time=moment().format('YYYY-MM-DD HH:mm:ss');
console.log(time);
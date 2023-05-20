//jsonp
//同源策略--->跨域---->①jsonp    ②cors
//同源策略: 协议  域名  端口 一致
//跨域: 协议  域名  端口如果不一致就跨域, 发送ajax会产生跨域
//jsonp  底层原理: 利用了script标签src天然的跨域特性, 专门获取js代码的
//       实现步骤: ①定义一个函数 ②创建一个script标签, 在src内写请求地址, ?callback=函数名  ③后端会返回一个函数的调用,并携带实参

// 函数防抖 ----> 持续触发的事件, 只执行最后一次
// ①创建一个记录定时器的变量
let timer = undefined;
事件源.onkeyup = function () {
    // ② 清除定时器
    clearTimeout(timer)
    // ③ 创建一个定时器
    timer = setTimeout(function () {
        // 代码逻辑
    }, 300)
}

//数据缓存
//把后端请求回来的数据,通过一个对象进行保存(内存, localStorage, sessionStorage).
//作用: 减轻服务器压力.  每一次请求数据之前, 就看看缓存里面有没有,如果缓存有这个数据, 咱们就不用发送ajax了.


//函数节流 -----> 持续触发的事件, 每隔一段特定的事件执行一次. 
// 先判断-->true, 关阀门, 100毫秒之后输出(打开阀门), 往复循环
// ①声明一个开关, 默认状态是打开的
let flag = true;
window.onscroll = function () {
    // ②判断开关是否打开
    if (flag == true) {
        // 操作DOM元素
        // 想办法减少log的触发频率
        setTimeout(function () {
            // 阀门打开
            flag = true;
        }, 500)
        // 要运行的代码
        console.log(1);
        // ③立刻关闭阀门, 同时定义定时器,一段时间之后输出内容
        flag = false;
    }
}
// 对jq的ajax请求进行二次封装(技术: Promise   ES6新增的构造函数, 目的是解决ajax回调地狱的问题, 因为promise对象可以调用.then方法, 可以通过链式调用的方法一直往下点)
function sendPromiseAjax(url, method, data) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: method,
            url: url,
            data: data,
            success: function (res) {
                // 成功的操作
                resolve(res)
            },
            error: function (err) {
                // 失败的操作
                reject(err)
            }
        });
    })
}
// 操作方式
// sendPromiseAjax('http://www.liulongbin.top:3006/api/getbooks', 'get', { id: 1 })
//     .then(res => {
//         //成功之后的代码
//     })
//     .catch(err => {
//         // 失败之后的代码
//     })
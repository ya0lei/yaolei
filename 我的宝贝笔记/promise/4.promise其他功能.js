// 123的顺序不固定, 因为ajax是异步的, 取决于谁先拿到返回值(网速有关)
// $.ajax({
//     type: "method",
//     url: "url",
//     data: "data",
//     dataType: "dataType",
//     success: function (response) {
//         console.log(1);
//     }
// });
// $.ajax({
//     type: "method",
//     url: "url",
//     data: "data",
//     dataType: "dataType",
//     success: function (response) {
//         console.log(2);
//     }
// });
// $.ajax({
//     type: "method",
//     url: "url",
//     data: "data",
//     dataType: "dataType",
//     success: function (response) {
//         console.log(3);
//     }
// });
// 需求: 如果我想发送多个ajax(同时发送), 按照发送书写的顺序拿到返回值怎么做?
// 新的方法 Promise.all([ajax1, ajax2, ajax3 ...]), 返回值 .then(res => res)也是一个数组,[ajax1的res, ajax2的res, ajax3的res...]

const res1 = Promise.all([
    sendPromiseAjax("http://www.liulongbin.top:3006/api/getbooks", 'get', { id: 1 }),
    sendPromiseAjax("http://www.liulongbin.top:3006/api/getbooks", 'get', { id: 2 }),
    sendPromiseAjax("http://www.liulongbin.top:3006/api/getbooks", 'get', { id: 3 })
])

res1.then(res => {
    console.log(res); //返回值也是个数组, 按照ajax发送顺序来保存
})

// Promise.race() 返回的是第一个拿到结果的返回值
const res2 = Promise.race([
    sendPromiseAjax("http://www.liulongbin.top:3006/api/getbooks", 'get', { id: 1 }),
    sendPromiseAjax("http://www.liulongbin.top:3006/api/getbooks", 'get', { id: 2 }),
    sendPromiseAjax("http://www.liulongbin.top:3006/api/getbooks", 'get', { id: 3 })
])
res2.then(res => {
    console.log(res); //3个ajax, 谁最先拿到数据, res保存的就是哪个结果
})
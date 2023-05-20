// Promise语法
// Promises是一个构造函数  reslove翻译:解决   reject翻译:失败
const p = new Promise((resolve, reject) => {
    // 可以写正常的代码的
    const random = Math.ceil(Math.random() * 10);
    // 必然要写一个异步代码 事件,ajax,定时器
    setTimeout(() => {
        // reslove()  程序员认为异步程序结果是成功的, 那么这个reslove函数就可以传递成功之后的数据
        // 举列子: 如果 random随机值 >=5 我就认为是成功的OK  <5 我认为是失败的
        if (random >= 5) {
            // 执行成功的函数
            resolve(random)
        } else {
            // 执行失败的函数
            reject(random)
        }
    }, 100)
})

// 我们就可以调用实例对象的. then方法, 拿到成功之后的值. catch方法, 数据失败的值
p.then(res => {
    console.log('我是调用reslove函数传递过来的参数');
    console.log(res);
}).catch(err => {
    console.log('我是调用reject函数传递过来的参数');
    console.log(err);
})




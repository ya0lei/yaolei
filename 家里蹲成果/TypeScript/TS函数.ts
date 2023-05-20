// 类
class P {
    a: string;
    b: number;
    constructor(a: string, b: number) {
        this.a = a;
        this.b = b;
    }
    hello(): void {
        console.log("hello world!")
    }
}
// 函数
// a为number,b为number,函数返回值为number
function add(a: number, b: number): number {
    return a + b;
}
// 可选参数,参数加?,可传可不传,必须写最后面
function add2(a: number, b: number, c?: number): number {
    // c存在吗?存在+c,否则a+b
    return c ? a + b + c : a + b;
}
// 默认参数
function add3(a: number, b: number = 100): number {
    return a + b;
}
// 剩余参数
// args获取所有参数,他是number类型,还是数组
// 传值不需要[]包裹,因为args本身得到的就是传参组成的数组
function add4(...args: number[]): number {
    let sum = 0;
    // for (let i = 0; i < args.length; i++) {
    //     sum += args[i];
    // }
    args.forEach((item) => {
        sum += item
    })
    return sum;
}
// 调用下
console.log(add4(0, 1, 2))

// 剩余参数有初始值a,b
function add5(a: number, b: number, ...args: number[]) {
    // 已知的算出来
    let sum = a + b;
    // 加上未知的
    args.forEach((item) => {
        sum += item;
    })
    return sum
}
// 调用下
// 突然发现好像没什么意义
console.log(add5(100, 100, 0, 1, 2, 3))

// 函数重载
// 重新规定函数的参数和返回值类型
// 报错,不搞了

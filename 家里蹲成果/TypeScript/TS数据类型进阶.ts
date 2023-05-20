// 类型推论
// 如果不写数据类型,ts会自己猜
let num = 1;// 等同于 let num:number = 1;
// 如果不赋值,ts理解为任何类型
let aaa; // 等同于 let aaa:any;

// 类型断言
// 手动指定一个值的类型
let str: any = "我可以是任意的类型";
// str是任意类型的值,但是我们知道他是字符,手动添加他的类型
// 不限制
let strLength: number = str.length;
// as写法
let strLength1: number = (str as string).length;
// 尖括号写法
let strLength2: number = (<string>str).length;

// 非空断言
// name!代表name数据不是null或者undefined
let _user: string | null | undefined;
// 不加!,_user可能为null或者undefined,会报错
// 加了只会温柔的警告
// console.log(_user!.toUpperCase);

// 确定赋值断言
// let value:number; 声明未赋值,打印他会报错
// 使用!,告诉ts我等一下会赋值,不要报错
let value!: number;
console.log(value);

// 组合类型
// 一个变量可以被赋予多种类型
let p: number | string | null | undefined;
p = 1;

// 接口
// 使用关键字interface来声明接口,接口用来规定对象的属性和方法
interface Person1 {
    name: string;
    age: number
}
let yaolei: Person1 = {
    name: '姚磊',
    age: 10
}

// 交叉类型
// 要求多个接口同时满足
interface Person2 {
    name: string;
    age: number
}
interface Person3 {
    name: string;
    sex: string
}
// 这个对象满足上面的两个接口
// 如果两个接口中,对象的key值相同,类型不同,会被识别为never类型,直接报错
let p1: Person2 & Person3 = {
    name: "师爷",
    age: 8,
    sex: "男"
}

// 类型守卫
// 判断值的类型是不是我们想要的
// typeof判断类型
function typeFn(val: string | number) {
    if (typeof val === "number") return 'number'
    if (typeof val === "string") return 'string'
    return "啥也不是"
}



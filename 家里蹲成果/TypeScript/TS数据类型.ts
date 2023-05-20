const s: string = "彼时彼刻,恰如此时此刻";
console.log(s);
// ts的数据类型
// 格式: const 变量名: 变量类型 = 初始值;
// 布尔值
const flag: boolean = true;
// 数字
const count: number = 10;
// 字符
let _name: string = "二狗";
// null
let n: null = null;
// undefined
let u: undefined = undefined;
// any任意类型
let a: any = {};
// unKnown未知类型,它可以是任何类型
// 差异:any可以赋值给任意类型,unKnown只能赋值给any和unKnown
let uk: unknown = "字符";
// void无类型,只能为空或undefined
let v: void = undefined;
// 一般用在函数上,告诉别人这个函数没有返回值
function hello(): void {
    console.log("hello啊,米西米西")
}
// never类型,表示永不存在的值,一般存在两种情况:
// 1.函数抛出异常,永远没有返回值
function errFn(): never {
    throw new Error("我是抛出的错误");
}
// 2.函数死循环,永远没有返回值
function loopDie(): never {
    while (true) { }
}


// 数组
// number[]表示:数字类型的数组
let arr: number[] = [0, 1, 2, 3, 4];
// Array<number>同样表示:数字类型的数组
let arr2: Array<number> = [0, 1, 2, 3, 4, 5];

// 数组-元组
// 数组的一种,规定第一项为数字,第二项为字符
let user: [number, string] = [1, '333'];

// 枚举:自己取个名字,如color,代表这个枚举里都是颜色,枚举的第一个值默认值为0,后面的值则是1,2,3
// 可以设置默认值.如red=100,设置了默认值,后面的值则变为101,102,103
// 如果有一项的值设置为字符,后面的也要接着设置,因为后面的默认值不能是 字符+1
enum Color {
    black,
    red = 100,
    pink = "粉色",
    blue = '蓝色',
}
const red: Color = Color.red;
console.log(Color.blue);

// object对象类型
// 只能为{},null和undefined也不行
let obj: object = {};

// Object,大写O开头,除null和undefined的所有类型
let bigObj: Object = '1111';





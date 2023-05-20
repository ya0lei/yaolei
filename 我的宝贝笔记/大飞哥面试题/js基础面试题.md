# JS基础面试题


## 1.**JavaScript 的基本类型有哪些？引用类型有哪些？null 和** undefined 的区别？

<details>
<summary>展开查看</summary>
<pre>数据类型
基本数据类型：Number、String、Boolean、null、undefined
引用数据类型：Function、Object、Array
区别
undefined:表示变量声明但未初始化时的值
null：表示准备用来保存对象，还没有真正保存对象的值。从逻辑角度看，null 值表示
一个空对象指针
ECMA 标准要求 null 和 undefined 等值判断返回 true
null == undefined // true
null === undefined // false</pre>    
</details>

## 2.**如何判断 JavaScript 的数据类型？**

<details>
<summary>展开查看</summary>
<pre>判断方法 
typeof
typeof 可以用来区分除了 null 类型以外的原始数据类型，对象类型的可以从普通对象里面
识别出函数：
typeof undefined // "undefined"
typeof null // "object"
typeof 1 // "number"
typeof "1" // "string"
typeof Symbol() // "symbol"
typeof function() {} // "function"
typeof {} // "object"</pre>    
</details>

## 3.**简述创建函数的几种方式？**

<details>
<summary>展开查看</summary>
<pre>第一种（函数声明）：
function sum1(num1,num2){ 
黑马程序员-南京前端学科出品 www.itheima.com
第 38 页 共 227 页
return num1+num2; 
}
第二种（函数表达式）
var sum2 = function(num1,num2){ 
return num1+num2; 
}
第三种（函数对象方式）
var sum3 = new Function("num1","num2","return num1+num2");</pre>    
</details>

## 4.**Javascript 创建对象的几种方式？**

<details>
<summary>展开查看</summary>
<pre>1、简单对象的创建 使用对象字面量的方式{} 
创建一个对象（最简单，好理解，推荐使用）
代码如下
var Cat = {}; //JSON 
Cat.name="kity"; //添加属性并赋值
Cat.age=2; 
Cat.sayHello=function(){ 
alert("hello "+Cat.name+",今年"+Cat["age"]+"岁了"); //可以使用“.”的方式访问
属性， 也 可以使用 HashMap 的方式访问
}
Cat.sayHello(); //调用对象的（方法）函数
2、用 function(函数)来模拟 class 
2.1） 创建一个对象，相当于 new 一个类的实例(无参构造函数) 
代码如下
function Person(){ 
}
var personOne=new Person(); //定义一个 function，如果有 new 关键字去"实例化",那
么该 function 可以看作是一个类
personOne.name="dylan"; 
personOne.hobby="coding"; 
personOne.work=function(){ 
alert(personOne.name+" is coding now..."); 
}
personOne.work(); 
2.2）可以使用有参构造函数来实现，这样定义更方便，扩展性更强（推荐使用）
代码如下
function Pet(name,age,hobby){ 
this.name=name;//this 作用域：当前对象
this.age=age; 
this.hobby=hobby; 
this.eat=function(){ 
alert("我叫"+this.name+",我喜欢"+this.hobby+",也是个吃货"); 
} 
}
var maidou =new Pet("麦兜",5,"睡觉");//实例化/创建对象
maidou.eat();//调用 eat 方法(函数) 
3、使用工厂方式来创建（Object 关键字）
代码如下：
var wcDog = new Object(); 
wcDog.name="旺财"; 
wcDog.age=3; 
wcDog.work=function(){ 
alert("我是"+wcDog.name+",汪汪汪......"); 
}
黑马程序员-南京前端学科出品 www.itheima.com
第 39 页 共 227 页
wcDog.work(); 
4、使用原型对象的方式 prototype 关键字
代码如下：
function Dog(){ 
}
Dog.prototype.name ="旺财"; 
Dog.prototype.eat = function(){ 
alert(this.name + "是个吃货"); 
}
var wangcai = new Dog(); 
wangcai.eat(); 
5、混合模式(原型和构造函数) 
代码如下：
function Car(name,price){ 
this.name=name; 
this.price=price; 
}
Car.prototype.sell=function(){ 
alert("我是"+this.name+"，我现在卖"+this.price+"万元"); 
} 
var camry = new Car("凯美瑞",27); 
camry.sell(); 
6、动态原型的方式(可以看作是混合模式的一种特例) 
代码如下：
function Car(name,price){ 
this.name=name; 
this.price=price; 
if(typeof Car.sell=="undefined"){ 
Car.prototype.sell=function(){ 
alert("我是"+this.name+"，我现在卖"+this.price+"万元"); 
} 
Car.sell=true; 
} 
}
var camry = new Car("凯美瑞",27); 
camry.sell(); 
以上几种，是 javascript 中最常用的创建对象的方式</pre>    
</details>

## 5. **请指出 JavaScript 宿主对象和原生对象的区别？**

<details>
<summary>展开查看</summary>
<pre>原生对象 
“独立于宿主环境的 ECMAScript 实现 提供的对象”
包含：Object、Function、Array、String、Boolean、Number、
EvalError、RangeError、ReferenceError、SyntaxError、TypeError、
Date、RegExp、Error、
URIError
内置对象
开发者不必明确实例化内置对象，它已被内部实例化了
同样是“独立于宿主环境”。而 ECMA-262 只定义了两个内置对象，即 Global 和 Math 
宿主对象
BOM 和 DOM 都是宿主对象。因为其对于不同的“宿主”环境所展示的内容不同。其实说白了
就是，ECMAScript 官方未定义的对象都属于宿主对象，因为其未定义的对象大多数是自己通过
ECMAScript 程序创建的对象</pre>    
</details>

## 6.**JavaScript 内置的常用对象有哪些？并列举该对象常用的方法？**

<details>
<summary>展开查看</summary>
<pre>对象及方法 
Arguments 函数参数集合
Arguments[ ] 函数参数的数组
Arguments 一个函数的参数和其他属性
Arguments.callee 当前正在运行的函数
Arguments.length 传递给函数的参数的个数
Array 数组
length 属性 动态获取数组长度
join() 将一个数组转成字符串。返回一个字符串。
reverse() 将数组中各元素颠倒顺序
delete 运算符 只能删除数组元素的值，而所占空间还在，总长度没变(arr.length)。
shift() 删除数组中第一个元素，返回删除的那个值，并将长度减 1。
pop() 删除数组中最后一个元素，返回删除的那个值，并将长度减 1。
unshift() 往数组前面添加一个或多个数组元素，长度要改变。arrObj.unshift(“a” ， “b，“c”) 
push() 往数组结尾添加一个或多个数组元素，长度要改变。arrObj.push(“a” ，“b”，
“c”) 
concat( ) 连接数组
slice( ) 返回数组的一部分
sort( ) 对数组元素进行排序
splice( ) 插入、删除或替换数组的元素
toLocaleString( ) 把数组转换成局部字符串
toString( ) 将数组转换成一个字符串
forEach 遍历所有元素
var arr = [1, 2, 3];
arr.forEach(function(item, index) {
// 遍历数组的所有元素
console.log(index, item);
});
every 判断所有元素是否都符合条件
var arr = [1, 2, 3];
var arr1 = arr.every(function(item, index) {
if (item < 4) {
return true;
}
})
console.log(arr1); // true
sort 排序
var arr = [1, 5, 2, 7, 3, 4];
var arr2 = arr.sort(function(a, b) {
// 从小到大
return a-b;
// 从大到小
return b-a;
})
console.log(arr2); // 1,2,3,4,5,7
map 对元素重新组装，生成新数组
var arr = [1, 5, 2, 7, 3, 4];
黑马程序员-南京前端学科出品 www.itheima.com
第 41 页 共 227 页
var arr2 = arr.map(function(item, index) {
return '<b>' + item + '</br>';
})
console.log(arr2);
filter 过滤符合条件的元素
var arr = [1, 2, 3, 4];
var arr2 = arr.filter(function(item, index) {
if (item>2) {
return true;
}
})
console.log(arr2); // [3, 4]
String 字符串对象 
Length 获取字符串的长度。如：var len = strObj.length 
toLowerCase() 将字符串中的字母转成全小写。如：strObj.toLowerCase() 
toUpperCase() 将字符串中的字母转成全大写。如：strObj.toUpperCase() 
charAt(index) 返回指定下标位置的一个字符。如果没有找到，则返回空字符串
substr() 在原始字符串，返回一个子字符串
substring() 在原始字符串，返回一个子字符串
区别：''' 
“abcdefgh”.substring(2，3) = “c” “abcdefgh”.substr(2，3) = “cde” 
split() 将一个字符串转成数组
charCodeAt( ) 返回字符串中的第 n 个字符的代码
concat( ) 连接字符串
fromCharCode( ) 从字符编码创建—个字符串
indexOf( ) 返回一个子字符串在原始字符串中的索引值(查找顺序从左往右查找)。如果没
有找到，则返回-1 
lastIndexOf( ) 从后向前检索一个字符串
localeCompare( ) 用本地特定的顺序来比较两个字符串
match( ) 找到一个或多个正则表达式的匹配
replace( ) 替换一个与正则表达式匹配的子串
search( ) 检索与正则表达式相匹配的子串
slice( ) 抽取一个子串
toLocaleLowerCase( ) 把字符串转换小写
toLocaleUpperCase( ) 将字符串转换成大写
toLowerCase( ) 将字符串转换成小写
toString( ) 返回字符串
toUpperCase( ) 将字符串转换成大写
valueOf( ) 
Boolean 布尔对象
Boolean.toString( ) 将布尔值转换成字符串
Boolean.valueOf( ) Boolean 对象的布尔值
Date 日期时间
创建 Date 对象的方法
（1）创建当前(现在)日期对象的实例，不带任何参数
var today = new Date()； （2）创建指定时间戳的日期对象实例，参数是时间戳。
时间戳：是指某一个时间距离 1970 年 1 月 1 日 0 时 0 分 0 秒，过去了多少毫秒值(1 
秒
=1000 毫秒) 
var timer = new Date(10000)； //时间是 1970 年 1 月 1 日 0 时 0 分 10 秒
（3）指定一个字符串的日期时间信息，参数是一个日期时间字符串
var timer = new Date(“2015/5/25 10：00：00”)； （4）指定多个数值参数
var timer = new Date(2015+100，4，25，10，20，0)； //顺序为：年、月、日、
时、分、秒，年、月、日是必须的
方法：
Date.getDate( ) 返回一个月中的某一天
Date.getDay( ) 返回一周中的某一天
Date.getFullYear( ) 返回 Date 对象的年份字段
Date.getHours( ) 返回 Date 对象的小时字段
Date.getMilliseconds( ) 返回 Date 对象的毫秒字段
Date.getMinutes( ) 返回 Date 对象的分钟字段
Date.getMonth( ) 返回 Date 对象的月份字段
Date.getSeconds( ) 返回 Date 对象的秒字段
Date.getTime( ) 返回 Date 对象的毫秒表示
Error 异常对象 
Error.message 可以读取的错误消息
Error.name 错误的类型
Error.toString( ) 把 Error 对象转换成字符串
EvalError 在不正确使用 eval()时抛出
SyntaxError 抛出该错误用来通知语法错误
RangeError 在数字超出合法范围时抛出
ReferenceError 在读取不存在的变量时抛出
TypeError 当一个值的类型错误时，抛出该异常
URIError 由 URl 的编码和解码方法抛出
Function 函数构造器 
Function.apply( ) 将函数作为一个对象的方法调用
Function.arguments[] 传递给函数的参数
Function.call( ) 将函数作为对象的方法调用
Function.caller 调用当前函数的函数
Function.length 已声明的参数的个数
Function.prototype 对象类的原型
Function.toString( ) 把函数转换成字符串
Math 数学对象 
Math 对象是一个静态对象
Math.PI 圆周率
Math.abs() 绝对值
Math.ceil() 向上取整(整数加 1，小数去掉) 
Math.floor() 向下取整(直接去掉小数) 
Math.round() 四舍五入
Math.pow(x，y) 求 x 的 y 次方
Math.sqrt() 求平方根
Number 数值对象 
Number.MAX_VALUE 最大数值
Number.MIN_VALUE 最小数值
Number.NaN 特殊的非数字值
Number.NEGATIVE_INFINITY 负无穷大
Number.POSITIVE_INFINITY 正无穷大
Number.toExponential( ) 用指数计数法格式化数字
Number.toFixed( ) 采用定点计数法格式化数字
Number.toLocaleString( ) 把数字转换成本地格式的字符串
Number.toPrecision( ) 格式化数字的有效位
Number.toString( ) 将—个数字转换成字符串
Number.valueOf( ) 返回原始数值
Object 基础对象
Object 含有所有 JavaScript 对象的特性的超类
Object.constructor 对象的构造函数
Object.hasOwnProperty( ) 检查属性是否被继承
Object.isPrototypeOf( ) 一个对象是否是另一个对象的原型
Object.propertyIsEnumerable( ) 是否可以通过 for/in 循环看到属性
Object.toLocaleString( ) 返回对象的本地字符串表示
Object.toString( ) 定义一个对象的字符串表示
Object.valueOf( ) 指定对象的原始值
RegExp 正则表达式对象
RegExp.exec( ) 通用的匹配模式
RegExp.global 正则表达式是否全局匹配
RegExp.ignoreCase 正则表达式是否区分大小写
RegExp.lastIndex 下次匹配的起始位置
RegExp.source 正则表达式的文本
RegExp.test( ) 检测一个字符串是否匹配某个模式
RegExp.toString( ) 把正则表达式转换成字符串</pre>    
</details>

## 7.**=== 和 ==的区别？**

<details>
<summary>展开查看</summary>
<pre>区别 
===：三个等号称为等同符，当等号两边的值为相同类型的时候，直接比较等号两边 的
值，值相同则返回 true，若等号两边的值类型不同时直接返回 false。也就是说三个等号 既
要判断值也要判断类型是否相等
==：两个等号称为等值符，当等号两边的值为相同类型时比较值是否相同，类型不同 时
会发生类型的自动转换，转换为相同的类型后再作比较。也就是说两个等号只要值相等
可以</pre>    
</details>

## 8.**null，undefined 的区别**

<details>
<summary>展开查看</summary>
<pre>区别 
null 表示一个对象被定义了，值为“空值”；
undefined 表示不存在这个值
typeof undefined //"undefined"
undefined :是一个表示"无"的原始值或者说表示"缺少值"，就是此处应该有一个值，但还 
没有定义。当尝试读取时会返回 undefined；
例如变量被声明了，但没有赋值时，就等于 undefined
typeof null //"object"
null : 是一个对象(空对象, 没有任何属性和方法)；
例如作为函数的参数，表示该函数的参数不是对象；
注意：
在验证 null 时，一定要使用=== ，因为 == 无法分别 null 和 undefined
undefined 表示"缺少值"，就是此处应该有一个值，但是还没有定义。
典型用法是：
1、变量被声明了，但没有赋值时，就等于 undefined
2、调用函数时，应该提供的参数没有提供，该参数等于 undefined
3、对象没有赋值的属性，该属性的值为 undefined
4、函数没有返回值时，默认返回 undefined
null 表示"没有对象"，即该处不应该有值。典型用法是：
4.1） 作为函数的参数，表示该函数的参数不是对象
4.2） 作为对象原型链的终点</pre>    
</details>

## 9.**JavaScript 中什么情况下会返回 undefined 值？**

<details>
<summary>展开查看</summary>
<pre>1、访问声明，但是没有初始化的变量
var aaa;
console.log(aaa); // undefined
2、访问不存在的属性
var aaa = {};
console.log(aaa.c);
3、访问函数的参数没有被显式的传递值
(function (b){
console.log(b); // undefined
})();
4、访问任何被设置为 undefined 值的变量
var aaa = undefined;console.log(aaa); // undefined
5、没有定义 return 的函数隐式返回
function aaa(){}console.log(aaa()); // undefined
6、函数 return
function aaa(){
没有显式的返回任何内容
return;
}
console.log(aaa()); // undefined</pre>    
</details>

## 10.**如何区分数组和对象？**

<details>
<summary>展开查看</summary>
<pre>方法一：通过 ES6 中的 Array.isArray 来识别
Array.isArray([]) //true
Array.isArray({}) //false
方法二：通过 instanceof 来识别
[] instanceof Array //true
{} instanceof Array //false
方法三：通过调用 constructor 来识别
{}.constructor //返回 object
[].constructor //返回 Array
方法四：通过 Object.prototype.toString.call 方法来识别
Object.prototype.toString.call([]) //["object Array"]
Object.prototype.toString.call({}) //["object Object"]</pre>    
</details>

## 11.**多维数组降维的几种方法**

<details>
<summary>展开查看</summary>
<pre>（1）数组字符串化
let arr =
'';
[[222, 333, 444], [55, 66, 77] ]
arr +=
arr = arr.split(',');
console.log(arr); // ["222", "333", "444", "55", "66", "77"]
（2）递归
function reduceDimension(arr){
let ret = [];
let toArr = function(arr){
arr.forEach(function(item){
item instanceof Array ? toArr(item) : ret.push(item);
});
}
toArr(arr);
return ret;
}3、Array.prototype.flat()
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]
var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]
var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
//使用 Infinity 作为深度，展开任意深度的嵌套数组
arr3.flat(Infinity);
// [1, 2, 3, 4, 5, 6]
4、使用 stack 无限反嵌套多层嵌套数组
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
function flatten(input) {
const stack = [...input];
const res = [];
while (stack.length) {
// 使用 pop 从 stack 中取出并移除值
const next = stack.pop();
if (Array.isArray(next)) {
// 使用 push 送回内层数组中的元素，不会改动原始输入 original input
stack.push(...next);
} else {
res.push(next);
} }
// 使用 reverse 恢复原数组的顺序
return res.reverse();
}
flatten(arr1);// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
5、使用 reduce、concat 和递归无限反嵌套多层嵌套的数组
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
function flattenDeep(arr1) {
return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDee
p(val)) : acc.concat(val), []);
}
flattenDeep(arr1);
// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]</pre>    
</details>

## 12.**怎么判断两个对象相等？**

<details>
<summary>展开查看</summary>
<pre>ES6 中有一个方法判断两个对象是否相等，这个方法判断是两个对象引用地址是否一致
let obj1= {
 a: 1
 }
 let obj2 = {
 a: 1
 }
console.log(Object.is(obj1, obj2)) // false
let obj3 = obj1
console.log(Object.is(obj1, obj3)) // true
console.log(Object.is(obj2, obj3)) // false
当需求是比较两个对象内容是否一致时就没用了
想要比较两个对象内容是否一致，思路是要遍历对象的所有键名和键值是否都一致：
1、判断两个对象是否指向同一内存
2、使用 Object.getOwnPropertyNames 获取对象所有键名数组
3、判断两个对象的键名数组是否相等
4、遍历键名，判断键值是否都相等
 let obj1 = {
 a: 1,
 b: {
 c: 2
 }
 }
 let obj2 = {
 b: {
 c: 3
 },
 a: 1
 }
 function isObjectValueEqual(a, b) {
 // 判断两个对象是否指向同一内存，指向同一内存返回 true
 if (a === b) return true
 // 获取两个对象键值数组
 let aProps = Object.getOwnPropertyNames(a)
 let bProps = Object.getOwnPropertyNames(b)
 // 判断两个对象键值数组长度是否一致，不一致返回 false
 if (aProps.length !== bProps.length) return false
 // 遍历对象的键值
 for (let prop in a) {
 // 判断 a 的键值，在 b 中是否存在，不存在，返回 false
 if (b.hasOwnProperty(prop)) {
 // 判断 a 的键值是否为对象，是则递归，不是对象直接判断键值是否相等，不相等返回 false
 if (typeof a[prop] === 'object') {
 if (!isObjectValueEqual(a[prop], b[prop])) return false
 } else if (a[prop] !== b[prop]) {
return false
}
} else { 
return false
} 
}
return true 
}
console.log(isObjectValueEqual(obj1, obj2)) // false</pre>    
</details>

## 13.**列举三种强制类型转换和两种隐式类型转换？**

<details>
<summary>展开查看</summary>
<pre>强制
转化成字符串 toString() String() 
转换成数字 Number()、 parseInt()、 parseFloat() 
转换成布尔类型 Boolean() 
隐式
拼接字符串
例子 var str = "" + 18 
- * / % ==</pre>    
</details>
## 14.**JavaScript 中怎么获取当前日期的月份？**

<details>
<summary>展开查看</summary>
<pre>方法 
JavaScript 中获得当前日期是使用 new Date 这个内置对象的实例，其他一些进阶的操作
也是基于这个内置对象的实例。
获取完整的日期（默认格式）：
var date = new Date(); // Sat Jul 06 2019 19:59:27 GMT+0800 (中国标准时间)
获取当前年份：
var year = date.getFullYear(); // 2019
获取当前月份：
var month = date.getMonth() + 1; // 7
获取当前日：
var day = date.getDay(); // 6
获取当前日期（年-月-日）：
month = (month > 9) ? month : ("0" + month);
day = (day < 10) ? ("0" + day) : day;
var today = year + "-" + month + "-" + day; // 
另外的一些操作：
date.getYear(); // 获取当前年份(2 位)
date.getFullYear(); // 获取完整的年份(4 位, 1970-????)
date.getMonth(); // 获取当前月份(0-11,0 代表 1 月)
date.getDate(); // 获取当前日(1-31)
date.getDay(); // 获取当前星期 X(0-6,0 代表星期天)
date.getTime(); // 获取当前时间(从 1970.1.1 开始的毫秒数)
date.getHours(); // 获取当前小时数(0-23)
date.getMinutes(); // 获取当前分钟数(0-59)
date.getSeconds(); // 获取当前秒数(0-59)
date.getMilliseconds(); // 获取当前毫秒数(0-999)
date.toLocaleDateString(); // 获取当前日期
date.toLocaleTimeString(); // 获取当前时间
date.toLocaleString( ); // 获取日期与时间</pre>    
</details>

## 15.**什么是类数组（伪数组），如何将其转化为真实的数组？**

<details>
<summary>展开查看</summary>
<pre>伪数组
1、具有 length 属性
2、按索引方式存储数据
3、不具有数组的 push.pop 等方法
伪数组（类数组）：无法直接调用数组方法或期望 length 属性有什么特殊的行为，不具有
数组的 push.pop 等方法，但仍可以对真正数据遍历方法来遍历它们。典型的是函数
document.childnodes 之类的，它们返回的 nodeList 对象都属于伪数组
伪数组-->真实数组
1.使用 Arrray.from()--ES6
2.[].slice.call(eleArr) 或则 Array.prototype.slice.call(eleArr)
示例：
let eleArr = document.querySelectorAll('li');
Array.from(eleArr).forEach(function(item){
alert(item);
});
let eleArr = document.querySelectorAll('li');
[].slice.call(eleArr).forEach(function(item){
alert(item);
});</pre>    
</details>

## 16.**如何遍历对象的属性？**

<details>
<summary>展开查看</summary>
<pre>1、遍历自身可枚举的属性 (可枚举，非继承属性) Object.keys() 方法
该方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中的属性名的排列
顺序和使用 for..in 遍历该对象时返回的顺序一致（两者的区别是 for ..in 还会枚举其原
型 链上的属性 ）
/**Array 对象**/
var arr = ['a','b','c'];
console.log(Object.keys(arr)); 
// ['0','1','2']
/**Object 对象**/
var obj = {foo:'bar',baz:42};
console.log(Object.keys(obj));
// ["foo","baz"]
/**类数组 对象 随机 key 排序**/ 
var anObj ={100:'a',2:'b',7:'c'};
console.log(Object.keys);
//['2','7','100']
/***getFoo 是一个不可枚举的属性**/
var my_obj = Object.create(
{}, { getFoo : { value : function () { return this.foo } } }
);
my_obj.foo = 1;
console.log(Object.keys(my_obj)); // ['foo']
2、遍历自身的所有属性(可枚举，不可枚举，非继承属性) Object.getOwnPropertyNames()
方法，该方法返回一个由指定对象的所有自身属性组成的数组(包括不可枚举属性但不包括
Symbol 值作为名称的属性)
var arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort()); // ["0", "1", "2", "length"]
// 类数组对象
var obj = { 0: "a", 1: "b", 2: "c"};
console.log(Object.getOwnPropertyNames(obj).sort()); // ["0", "1", "2"]
// 使用 Array.forEach 输出属性名和属性值
Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
console.log(val + " -> " + obj[val]); 
});
// 输出
// 0 -> a
// 1 -> b
// 2 -> c
//不可枚举属性
var my_obj = Object.create({}, {
getFoo: {
value: function() { return this.foo; },
enumerable: false
}
});
my_obj.foo = 1;
console.log(Object.getOwnPropertyNames(my_obj).sort()); // ["foo", "getFoo"]
3、遍历可枚举的自身属性和继承属性
遍历对象的属性
（可枚举，可继承的属性） for in 
var obj={
name：'张三',
age : '24',
getAge:function(){ 
console.log(this.age);
} 
}
var arry ={};
for(var i in obj){ 
if(obj.hasOwnProperty(i)&& typeOf obj[i] != 'function'){
arry[i] = obj[i];
} }
console.log(arry);
{name:'张三',age:24}
注: hasOwnProperty()方法判断对象是有某个属性(本身的属性，不是继承的属性) 4、遍历所有的自身属性和继承属性
(function () {
var getAllPropertyNames = function (obj) {
var props = [];
do {
props = props.concat(Object.getOwnPropertyNames(obj));
} while (obj = Object.getPrototypeOf(obj));
return props;
}
var propertys = getAllPropertyNames(window);
alert(propertys.length); //276
alert(propertys.join("\n")); //toString 等
})()</pre>    
</details>

## 17.**JavaScript 中的作用域、预解析与变量声明提升？**

<details>
<summary>展开查看</summary>
<pre>作用域 
就是变量的有效范围。 在一定的空间里可以对数据进行读写操作，这个空间就是数据的作用域
1、全局作用域： 最外层函数定义的变量拥有全局作用域，即对任何内部函数来说，都是
可以访问的；
2、局部作用域： 局部作用域一般只在固定的代码片段内可访问到，而对于函数外部是无
法访问的，最常见的例如函数内部。在 ES6 之前，只有函数可以划分变量的作用域，所以
在函数的外面无法访问函数内的变量
3、块级作用域：凡是代码块就可以划分变量的作用域，这种作用域的规则就叫块级作用域
块级作用域 函数作用域 词法作用域之间的区别：
3.1）块级作用域和函数作用域描述的是，什么东西可以划分变量的作用域
3.2）词法作用域描述的是，变量的查找规则
之间的关系：
1、 块级作用域 包含 函数作用域
2、 词法作用域 与 块级作用域、函数作用域之间没有任何交集， 他们从两个角度描述了作用域的规则
ES6 之前 JavaScript 采用的是函数作用域+词法作用域，ES6 js 采用的是块级作用域+词
法作用域
预解析
JavaScript 代码的执行是由浏览器中的 JavaScript 解析器来执行的。JavaScript 解析器
执 行 JavaScript 代码的时候，分为两个过程：预解析过程和代码执行过程
预解析过程：
1.把变量的声明提升到当前作用域的最前面，只会提升声明，不会提升赋值
2.把函数的声明提升到当前作用域的最前面，只会提升声明，不会提升调用
3.先提升 function，在提升 var
变量提升 
变量提升：定义变量的时候，变量的声明会被提升到作用域的最上面，变量的赋值不会提升
函数提升：JavaScript 解析器首先会把当前作用域的函数声明提前到整个作用域的最前面
变量声明提升：
使用 var 关键字定义的变量，被称为变量声明；
函数声明提升的特点是，在函数声明的前面，可以调用这个函数</pre>    
</details>

## 18.**变量提升与函数提升的区别？**

<details>
<summary>展开查看</summary>
<pre>变量提升
简单说就是在 JavaScript 代码执行前引擎会先进行预编译，预编译期间会将变量声明与
函 数声明提升至其对应作用域的最顶端，函数内声明的变量只会提升至该函数作用域最顶层
当函数内部定义的一个变量与外部相同时，那么函数体内的这个变量就会被上升到最顶端
举例来说：
console.log(a); // undefined  
var a = 3;
// 预编译后的代码结构可以看做如下运行顺序
var a; // 将变量 a 的声明提升至最顶端，赋值逻辑不提升。
console.log(a); // undefined 
a = 3; // 代码执行到原位置即执行原赋值逻辑
函数提升 
函数提升只会提升函数声明式写法，函数表达式的写法不存在函数提升
函数提升的优先级大于变量提升的优先级，即函数提升在变量提升之上</pre>    
</details>

## 19.**什么是作用域链？**

<details>
<summary>展开查看</summary>
<pre>作用域链 
当代码在一个环境中执行时，会创建变量对象的一个作用域链
由子级作用域返回父级作用域中寻找变量，就叫做作用域链
作用域链中的下一个变量对象来自包含环境，也叫外部环境。而再下一个变量对象
则来自下一个包含环境，一直延续到全局执行环境。全局执行环境的变量对象始终都是作
用域链中的最后一个对象
作用域链前端始终都是当前执行的代码所在环境的变量对象，如果环境是函数，则将
其活动对象作为变量对象</pre>    
</details>

## 20.**如何延长作用域链？**

<details>
<summary>展开查看</summary>
<pre>作用域链是可以延长的
延长作用域链：
执行环境的类型只有两种，全局和局部（函数）。但是有些语句可以在作用域链的前端临
时增加一个变量对象，该变量对象会在代码执行后被移除
具体来说就是执行这两个语句时，作用域链都会得到加强
1、try - catch 语句的 catch 块；会创建一个新的变量对象，包含的是被抛出的错误对象的声明
2、with 语句。with 语句会将指定的对象添加到作用域链中</pre>    
</details>

## 21.**判断一个值是什么类型有哪些方法？**

<details>
<summary>展开查看</summary>
<pre>方法 1、typeof 运算符
2、instanceof 运算符
instanceof 严格来说是 Java 中的一个双目运算符，用来测试一个对象是否为一个类的实
例，用法为：
// 判断 foo 是否是 Foo 类的实例
function Foo(){} 
var foo = new Foo(); 
console.log(foo instanceof Foo) //true
3、Object.prototype.toString 方法
在 JavaScript 里使用 typeof 来判断数据类型，只能区分基本类型，即 “Number”，”
String”，”undefined”，”Boolean”，”Object”，“Function”，“symbol” (ES6 新增)七 种  对于数组、null、对象来说，其关系错综复杂，使用 typeof 都会统一返回 “object”
字符串
要想区别对象、数组、函数单纯使用 typeof 是不行的，JavaScript 中,通过
Object.prototype.toString 方法，判断某个对象值属于哪种内置类型。
在介绍 Object.prototype.toString 方 法 之 前 ， 我 们 先 把 toString() 方 法 和
Object.prototype.toString.call()方法进行对比
toString()方法和 Object.prototype.toString.call()方法对比
var arr=[1,2];
//直接对一个数组调用 toString()
arr.toString();// "1,2"
//通过 call 指定 arr 数组为 Object.prototype 对象中的 toString 方法的上下文
Object.prototype.toString.call(arr); //"[object Array]"</pre>    
</details>

## 22.**如何实现数组的随机排序？**

<details>
<summary>展开查看</summary>
<pre>方法一： 
 var arr = [1,2,3,4,5,6,7,8,9,10];
 function randSort1(arr){
 for(var i = 0,len = arr.length;i < len; i++ ){
 var rand = parseInt(Math.random()*len);
 var temp = arr[rand];
 arr[rand] = arr[i];
 arr[i] = temp;
 }
 return arr;
 }
 console.log(randSort1(arr));
方法二： 
var arr = [1,2,3,4,5,6,7,8,9,10];
 function randSort2(arr){
 var mixedArray = [];
 while(arr.length >0){
 var randomIndex = parseInt(Math.random()*arr.length);
 mixedArray.push(arr[randomIndex]);
 arr.splice(randomIndex, 1);
 }
 return mixedArray;
 }
 console.log(randSort2(arr));
方法三： 
var arr = [1,2,3,4,5,6,7,8,9,10];
 arr.sort(function(){
 return Math.random() - 0.5;
 })
 console.log(arr);</pre>    
</details>


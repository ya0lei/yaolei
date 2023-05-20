# JS高级面试题

## 1.**typeof 和 instanceof 区别**

<details>
<summary>展开查看</summary>
<pre>在 javascript 中，判断一个变量的类型可以用 typeof 
1、数字类型、typeof 返回的值是 number。比如说：typeof(1)，返回值是 number 
2、字符串类型，typeof 返回的值是 string。比如 typeof(“123”返回值时 string) 
3、布尔类型，typeof 返回的值是 boolean。比如 typeof(true)返回值时 boolean 
4、对象、数组、null 返回的值是 object。比如 typeof(window)，typeof(document)，
typeof(null)返回的值都是 object
5、函数类型，返回的值是 function。比如：typeof(eval)，typeof(Date)返回的值都是
function。 6、不存在的变量、函数或者 undefined，将返回 undefined。比如：typeof(abc)、
typeof(undefined)都返回 undefined
使用 typeof 运算符无论引用的是什么类型的对象，它都返回”object”
运算符 instanceof 来解决这个问题。用于判断某个对象是否被另一个函数构造</pre>    
</details>

## 2.**js 使用 typeof 能得到的哪些类型？**

<details>
<summary>展开查看</summary>
<pre>typeof 只能区分值类型
typeof undefined // undefined
typeof null // object
typeof console.log // function
typeof NaN // number</pre>    
</details>

## 3.**解释一下什么是回调函数，并提供一个简单的例子？**

<details>
<summary>展开查看</summary>
<pre>回调函数就是一个通过调用的函数。如果你把函数的（地址）作为给另一个函数，当这个指
针被用来调用其所指向的函数时，我们就说这是回调函数。回调函数不是由该函数的实现方直接
调用，而是在特定的事件或条件发生时由另外的一方调用的
案例：
#include<stdio.h>
//callbackTest.c
//1.定义函数 onHeight（回调函数）
//@onHeight 函数名
//@height 参数
//@contex 上下文
void onHeight(double height, void *contex)
{
printf("current height is %lf", height);
}
//2.定义 onHeight 函数的原型
//@CallbackFun 指向函数的指针类型
//@height 回调参数，当有多个参数时，可以定义一个结构体
//@contex 回调上下文，在 C 中一般传入 nullptr，在 C++中可传入对象指针
typedef void (*CallbackFun)(double height, void *contex);
//定义全局指针变量
CallbackFun m_pCallback;
//定义注册回调函数
void registHeightCallback(CallbackFun callback, void *contex)
{
m_pCallback = callback;
}
//定义调用函数
void printHeightFun(double height)
{
m_pCallback(height, NULL);
}
//main 函数
int main()
{
//注册回调函数 onHeight
registHeightCallback(onHeight, NULL);
//打印 height
double h = 99;
printHeightFun(99);
}</pre>    
</details>

## 4.**什么是闭包？**

<details>
<summary>展开查看</summary>
<pre>定义： 
一个作用域可以访问另外一个函数内部的局部变量 ,或者说一个函数（子函数）访问另一
个函数（父函数）中的变量。 此时就会有闭包产生 ,那么这个变量所在的函数我们就称之为闭
包函数。
function aaa() {
var a = 0;
return function () {
alert(a++);
};
}
var fun =
fun(); 
aaa();
//1
优缺点： 
闭包的主要作用: 延伸了变量的作用范围, 因为闭包函数中的局部变量不会等着闭包函数
执行完就销毁, 因为还有别的函数要调用它 , 只有等着所有的函数都调用完了他才会销
毁 闭包会造成内存泄漏，如何解决：用完之后手动释放
详解： 
闭包不仅仅可以实现函数内部的作用域访问这个函数中的局部变量,
还可以实现全局作用域或者是别的地方的作用域也可以访问到函数内部的局部变量 , 
实现方法就是 return 了一个函数
所以 return 函数也是我们实现闭包的一个主要原理, 因为返回的这个函数本身就是我们
fn 函数内部的一个子函数 ,所以子函数是可以访问父函数里面的局部变量的, 所以返回完毕
之后 ,外面的函数一调用, 就会回头调用返回的这个函数, 所以就可以拿到这个子函数
对 应的父函数里面的局部变量. 
注意： 1、由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，
否则会造成网页的性能问题，在 IE 中可能导致内存泄露。解决方法是，在退出函数之前，
将不使用的局部变量全部删除。
2、闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象
（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私
有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。</pre>    
</details>

## 5.**什么是内存泄漏**

<details>
<summary>展开查看</summary>
<pre>内存泄露是指：内存泄漏也称作"存储渗漏"，用动态存储分配函数动态开辟的空间，在使
用完毕后未释放，结果导致一直占据该内存单元。直到程序结束。(其实说白了就是该内存空间
使用完毕之后未回收)即所谓内存泄漏。</pre>    
</details>

## 6.**哪些操作会造成内存泄漏？**

<details>
<summary>展开查看</summary>
<pre>1、垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的
引用数量为 0（没有其他对象引用过该对象），或对该对象的唯一引用是循环的，那么该对象的
内存即可回收
2、setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏
3、闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）</pre>    
</details>

## 7.**JS 内存泄漏的解决方式**

<details>
<summary>展开查看</summary>
<pre>1、global variables：对未声明的变量的引用在全局对象内创建一个新变量。在浏览器中，
全局对象就是 window。
function foo(arg) {
bar = 'some text'; // 等同于 window.bar = 'some text';
}
1.1）解决：
1.1.1）创建意外的全局变量
function foo() {
this.var1 = 'potential accident'
}
1.1.2）可以在 JavaScript 文件开头添加 “use strict”，使用严格模式。这样在严
格模式下解析 JavaScript 可以防止意外的全局变量
1.1.3）在使用完之后，对其赋值为 null 或者重新分配
1.2）被忘记的 Timers 或者 callbacks
在 JavaScript 中使用 setInterval 非常常见
大多数库都会提供观察者或者其它工具来处理回调函数，在他们自己的实例变为不可达时，
会让回调函数也变为不可达的。对于 setInterval，下面这样的代码是非常常见的：
var serverData = loadData();
setInterval(function() {
var renderer = document.getElementById('renderer');
if(renderer) {
renderer.innerHTML = JSON.stringify(serverData);
}
}, 5000); //This will be executed every ~5 seconds.
这个例子阐述着 timers 可能发生的情况：计时器会引用不再需要的节点或数据
1.3）闭包：一个可以访问外部（封闭）函数变量的内部函数
JavaScript 开发的一个关键方面就是闭包：一个可以访问外部（封闭）函数变量的内部函
数。由于 JavaScript 运行时的实现细节，可以通过以下方式泄漏内存：
var theThing = null;
var replaceThing = function () {
 var originalThing = theThing;
var unused = function () {
 if (originalThing) // a reference to 'originalThing'
 console.log("hi");
 };
 theThing = {
 longStr: new Array(1000000).join('*'),
 someMethod: function () {
 console.log("message");
 }
 };
};
setInterval(replaceThing, 1000);
1.4）DOM 引用
有时候，在数据结构中存储 DOM 结构是有用的。假设要快速更新表中的几行内容。将每行 DOM 的引用存
储在字典或数组中可能是有意义的。当这种情况发生时，就会保留同一 DOM 元素的两份引用：一个在
DOM 树种，另一个在字典中。如果将来某个时候你决定要删除这些行，则需要让两个引用都不可达。 
var elements = {
button: document.getElementById('button'),
image: document.getElementById('image')
};
function doStuff() {
elements.image.src = 'http://example.com/image_name.png';
}
function removeImage() {
}</pre>    
</details>

## 8.**说说你对原型（prototype）理解**

<details>
<summary>展开查看</summary>
<pre>JavaScript 中所有都是对象，在 JavaScript 中，原型也是一个对象，通过原型可以实现
对象的属性继承，JavaScript 的函数对象中都包含了一个” prototype”内部属性，这个属
性所对应的就是该函数对象的原型
“prototype”作为函数对象的内部属性，是不能被直接访问的。所以为了方便查看一个对
象的原型，Firefox 和 Chrome 内核的 JavaScript 引擎中提供了”proto“这个非标准的访问器
原型的主要作用就是为了实现继承与扩展对象</pre>    
</details>

## 9.**介绍下原型链（解决的是继承问题吗）**

<details>
<summary>展开查看</summary>
<pre>JavaScript 原型： 每个对象都会在其内部初始化一个属性，就是 prototype(原型) 
原型链：
当访问一个对象的某个属性时，会先在这个对象本身属性上查找，如果没有找到，则会去
它的__proto__隐式原型上查找，即它的构造函数的 prototype，如果还没有找到就会再在
构造函数的 prototype 的__proto__中查找，这样一层一层向上查找就会形成一个链式结
构，我们称为原型链。
特点：
JavaScript 对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原
型副本。当我们修改原型时，与之相关的对象也会继承这一改变</pre>    
</details>

## 10.**常见的 js 中的继承方法有哪些**

<details>
<summary>展开查看</summary>
<pre>ES5 继承有以下六种方法：
1、原型链继承 JavaScript 实现继承的基本思想：通过原型将一个引用类型继承另一个引用类
型的属性和方法
2、借用构造函数继承(伪造对象或经典继承) JavaScript 实现继承的基本思想：在子类构造
函数内部调用超类型构造函数。 通过使用 apply()和 call()方法可以在新创建的子类对
象上执行构造函数
3、组合继承(原型+借用构造)(伪经典继承) JavaScript 实现继承的基本思想：将原型链和 
借用构造函数的技术组合在一块，从而发挥两者之长的一种继承模式，将原型链和借用构造函
数的技术组合到一起，从而取长补短发挥两者长处的一种继承模式
4、型式继承 JavaScript 实现继承的基本思想：借助原型可以基于已有的对象创建新对象，
同时还不必须因此创建自定义的类型
5、寄生式继承 JavaScript 实现继承的基本思想：创建一个仅用于封装继承过程的函数，该函
数在内部以某种方式来增强对象，最后再像真正是它做了所有工作一样返回对象。
寄生式继承是原型式继承的加强版
6、寄生组合式继承 JavaScript 实现继承的基本思想：通过借用函数来继承属性，通过原型链
的混成形式来继承方法
ES6 的继承： 1、使用 class 构造一个父类
class Parent {
constructor(name,age){
this.name = name
this.age = age
}
sayName(){
console.log(this.name);
} } 2、使用 class 构造一个子类，并使用 extends 实现继承，super 指向父类的原型对象
class Child extends Parent{
constructor(name,age,gender){
super(name,age)
this.gender = gender
}
sayGender(){
console.log(this.gender);
} } 3、实例化对象
const ming = new Child('ming',18,'男')
ming.sayGender()
ming.sayName()
console.log(ming.name);
 console.log(ming.age);</pre>    
</details>

## 11.**介绍 this 各种情况**

<details>
<summary>展开查看</summary>
<pre>this 的情况：
1、以函数形式调用时，this 永远都是 window
2、以方法的形式调用时，this 是调用方法的对象
3、以构造函数的形式调用时，this 是新创建的那个对象
4、使用 call 和 apply 调用时，this 是指定的那个对象
5、箭头函数：箭头函数的 this 看外层是否有函数
如果有，外层函数的 this 就是内部箭头函数的 this
如果没有，就是 window
6、特殊情况：通常意义上 this 指针指向为最后调用它的对象。这里需要注意的一点就是
如果返回值是一个对象，那么 this 指向的就是那个返回的对象，如果返回值不是一个对象那么
this 还是指向函数的实例</pre>    
</details>

## 12.**数组中的 forEach 和 map 的区别？**

<details>
<summary>展开查看</summary>
<pre>forEach 和 map 的相同点
相同点 都是循环遍历数组中的每一项
forEach 和 map 方法里每次执行匿名函数都支持 3 个参数，参数分别是 item（当前每一项），
index（索引值），arr（原数组）
匿名函数中的 this 都是指向 window 只能遍历数组 都不会改变原数组 区别 map 方法
1.map 方法返回一个新的数组，数组中的元素为原始数组调用函数处理后的值
2.map 方法不会对空数组进行检测，map 方法不会改变原始数组。
3.浏览器支持：chrome、Safari1.5+、opera 都支持，IE9+, 若 arr 为空数组，则 map 方法返
回的也是一个空数组。
forEach 方法
1.forEach 方法用来调用数组的每个元素，将元素传给回调函数
2.forEach 对于空数组是不会调用回调函数的。 无论 arr 是不是空数组，forEach 返回的
都是undefined。这个方法只是将数组中的每一项作为 callback 的参数执行一次</pre>    
</details>

## 13.**for in 和 for of 的区别**

<details>
<summary>展开查看</summary>
<pre>1、推荐在循环对象属性的时候使用 for...in，在遍历数组的时候的时候使用 for...of
2、for...in 循环出的是 key，for...of 循环出的是 value
3、注意，for...of 是 ES6 新引入的特性。修复了 ES5 引入的 for...in 的不足
4、for...of 不能循环普通的对象，需要通过和 Object.keys()搭配使用</pre>    
</details>

## 14.**call 和 apply，bind 的区别**

<details>
<summary>展开查看</summary>
<pre>共同点：
1、都是用来改变函数的 this 对象的指向的。
2、第一个参数都是 this 要指向的对象。
3、都可以利用后续参数传参。
call 方法调用一个函数, 其具有一个指定的 this 值和分别地提供的参数(参数的列表)。
注意：
该方法的作用和 apply() 方法类似，只有一个区别，就是 call()方法接受的是若干个参数
的列表，而 apply()方法接受的是一个包含多个参数的数组
方法调用一个具有给定 this 值的函数，以及作为一个数组（或类似数组对象）提供的参数。
注意：
call()方法的作用和 apply() 方法类似，区别就是 call()方法接受的是参数列表，而 apply()
方法接受的是一个参数数组
bind()方法创建一个新的函数，当这个新的函数被调用时，其 this 值为提供的值，其参数列
表前几项，置为创建时指定的参数序列</pre>    
</details>

## 15.**EventLoop 事件循环机制**

<details>
<summary>展开查看</summary>
<pre>什么是 Event Loop
JavaScript 的事件分两种，宏任务(macro-task)和微任务(micro-task)
宏任务：包括整体代码 script，setTimeout，setInterval
微任务：Promise.then(非 new Promise)，process.nextTick(node 中)
事件的执行顺序——先执行宏任务，然后执行微任务，任务有同步的任务和异步的任务，同
步的进入主线程，异步的进入 Event Table 并注册函数，异步事件完成后，会将回调函数放在队
列中，如果还有异步的宏任务，那么就会进行循环执行上述的操作。
setTimeout(() => {
console.log('延时 1 秒');
},1000)
 console.log("开始")
//开始
//延时 1 秒
上述代码，setTimeout 函数是宏任务，且是异步任务，因此会将函数放入 Event Table 并
注册函数，经过指定时间后，把要执行的任务加入到 Event Queue 中，等待同步任务
console.log(“开始”)执行结束后，读取 Event Queue 中 setTimeout 的回调函数执行。
上述代码不包含微任务，接下来看包含微任务的代码：
setTimeout(function() {
console.log('setTimeout');
},1000)
new Promise(function(resolve) {
console.log('promise');
}).then(function() {
console.log('then');
})
console.log('console');
1、首先 setTimeout，放入 Event Table 中，1 秒后将回调函数放入宏任务的 Event Queue 中 2、new Promise 同步代码，立即执行 console.log(‘promise’),然后看到微任务 then，因此
将其放入微任务的 Event Queue 中 3、接下来执行同步代码 console.log(‘console’) 4、主线程的宏任务，已经执行完毕，接下来要执行微任务，因此会执行 Promise.then，到此，
第一轮事件循环执行完毕
5、第二轮事件循环开始，先执行宏任务，即 setTimeout 的回调函数，然后查找是否有微任务，
没有，事件循环结束
总结： 
事件循环先执行宏任务，其中同步任务立即执行，异步任务加载到对应的 Event Queue 中，
微任务也加载到对应的微任务的 Event Queue 中，所有的同步微任务执行完之后，如果发现微任
务的 Event Queue 中有未执行完的任务，先执行他们这样算是完成了一轮事件循环。接下来查看
宏任务的队列中是否有异步代码，有的话执行第二轮的事件循环，以此类推。
再来看一个复杂点的例子：
console.log('1');
setTimeout(function() {
 console.log('2');
 process.nextTick(function() {
 console.log('3');
 })
 new Promise(function(resolve) {
 console.log('4');
 resolve();
}).then(function() {
console.log('5')
})
})
//1、2、4、3、5 1、宏任务同步代码 console.log(‘1’) 2、setTimeout，加入宏任务 Event Queue，没有发现微任务，第一轮事件循环走完
3、第二轮事件循环开始，先执行宏任务，从宏任务 Event Queue 中独取出 setTimeout 的回调函数
4、同步代码 console.log(‘2’),发现 process.nextTick，加入微任务 Event Queue
5、new Promise，同步执行 console.log(‘4’),发现 then，加入微任务 Event Queue
6、宏任务执行完毕，接下来执行微任务，先执行 process.nextTick，然后执行 Promise.then
7、微任务执行完毕，第二轮事件循环走完，没有发现宏任务，事件循环结束</pre>    
</details>

## 16.**js 防抖和节流**

<details>
<summary>展开查看</summary>
<pre>在进行窗口的 resize、scroll，输入框内容校验等操作时，如果事件处理函数调用的频率无限
制，会加重浏览器的负担，导致用户体验非常糟糕
此时我们可以采用 debounce（防抖）和 throttle（节流）的方式来减少调用频率，同时又不影
响实际效果
函数防抖：
函数防抖（debounce）：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行
一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时
如下，持续触发 scroll 事件时，并不执行 handle 函数，当 1000 毫秒内没有触发 scroll 事件时，
才会延时触发 scroll 事件
function debounce(fn, wait) {
var timeout = null; 
return function() { 
if(timeout !== null) clearTimeout(timeout); 
timeout = setTimeout(fn, wait); 
} 
} // 处理函数
function handle() { 
console.log(Math.random()); 
}
// 滚动事件 window.addEventListener('scroll', debounce(handle, 1000)); 
函数节流（throttle）：
当持续触发事件时，保证一定时间段内只调用一次事件处理函数
节流通俗解释就比如我们水龙头放水，阀门一打开，水哗哗的往下流，秉着勤俭节约的优 良
传统美德，我们要把水龙头关小点，最好是如我们心意按照一定规律在某个时间间隔内 一
滴一滴的往下滴
如下，持续触发 scroll 事件时，并不立即执行 handle 函数，每隔 1000 毫秒才会执行一次
handle 函数
var throttle =function(func, delay) {
var prev = Date.now(); 
return function() { 
var context = this; 
var args = arguments; 
var now = Date.now(); 
if (now - prev >= delay) { 
func.apply(context, args); 
prev = Date.now(); 
} 
} 
}
function handle() {console.log(Math.random());} 
window.addEventListener('scroll', throttle(handle, 1000)); 
总结： 
函数防抖：
将几次操作合并为一此操作进行。原理是维护一个计时器，规定在延迟时间后触发函数，但是
在延迟时间内再次触发的话，就会取消之前的计时器而重新设置。只有最后一次操作能被触发
函数节流：
使得一定时间内只触发一次函数。原理是通过判断是否到达一定时间来触发函数
区别：
函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，
而函数防抖只是在最后一次事件后才触发一次函数。
结合应用场景 
防抖(debounce)
search 搜索联想，用户在不断输入值时，用防抖来节约请求资源。
 window 触发 resize 的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖
来让其只触发一次
节流(throttle)
 鼠标不断点击触发，mousedown(单位时间内只触发一次)
 监听滚动事件，比如是否滑到底部自动加载更多，用 throttle 来判断</pre>    
</details>

## 17.**new 操作符具体干了什么呢？**

<details>
<summary>展开查看</summary>
<pre>1、创建一个空对象: 并且 this 变量引入该对象,同时还继承了函数的原型
2、设置原型链
3、执行函数体
4、判断返回值
空对象指向构造函数的原型对象
修改构造函数 this 指针指向空对象,并执行函数体
返回对象就用该对象,没有的话就创建一个对象</pre>    
</details>

## 18.**谈谈你对 Javascript 垃圾回收机制的理解？**

<details>
<summary>展开查看</summary>
<pre>1、标记清除（mark and sweep）
这是 JavaScript 最常见的垃圾回收方式，当变量进入执行环境的时候，比如函数中声明一个变
量，垃圾回收器将其标记为“进入环境”，当变量离开环境的时候（函数执行结束）将其标记为
“离开环境”
垃圾回收器会在运行的时候给存储在内存中的所有变量加上标记，然后去掉环境中的变量以及
被环境中变量所引用的变量（闭包），在这些完成之后仍存在标记的就是要删除的变量了
2、引用计数(reference counting)
在低版本 IE 中经常会出现内存泄露，很多时候就是因为其采用引用计数方式进行垃圾回收。引
用计数的策略是跟踪记录每个值被使用的次数，当声明了一个 变量并将一个引用类型赋值给该
变量的时候这个值的引用次数就加 1，如果该变量的值变成了另外一个，则这个值得引用次数
减 1，当这个值的引用次数变为 0 的时 候，说明没有变量在使用，这个值没法被访问了，因此
可以将其占用的空间回收，这样垃圾回收器会在运行的时候清理掉引用次数为 0 的值占用的空
间在 IE 中虽然 JavaScript 对象通过标记清除的方式进行垃圾回收，但 BOM 与 DOM 对象却是通过
引用计数回收垃圾的，也就是说只要涉及 BOM 及 DOM 就会出现循环引用问题</pre>    
</details>

## 19.**class 和普通构造函数有何区别？**

<details>
<summary>展开查看</summary>
<pre>Js 构造函数：
function MathHandle(x,y){
this.x=x
this.y=y
}
MathHandle.prototype.add=function(){
return this.x+this.y
}
var m =new MathHandle(1,2)
console.log(m.add())
class 基本语法：
class MathHandle{
 constructor(x,y){
 this.x = x
 this.y = y
 }
 add(){
 return this.x + this.y
 } }
const m = new MathHandle(1,2)
console.log(m.add())
语法糖：
在上述两段代码中分别加入如下代码，运行
console.log(typeof MathHandle) // 'function'
console.log(MathHandle.prototype.constructor === MathHandle) //true
console.log(m.__proto__ === MathHandle.prototype) //true
运行结果一致。我认为，class 是构造函数的语法糖
综上所述：
class 在语法上更加贴合面向对象的写法
class 实现继承更加易读、易理解
更易于写 java 等后端语言的使用
本质还是语法糖，使用 prototype</pre>    
</details>

## 20.**JS 里垃圾回收机制是什么，常用的是哪种，怎么处理的？**

<details>
<summary>展开查看</summary>
<pre>JS 的垃圾回收机制是为了以防内存泄漏，内存泄漏的含义就是当已经不需要某块内存时这块内
存还存在着，垃圾回收机制就是间歇的不定期的寻找到不再使用的变量，并释放掉它们所指向
的内存
JS 中最常见的垃圾回收方式是标记清除
工作原理：是当变量进入环境时，将这个变量标记为“进入环境”。当变量离开环境时，则将其
标记为“离开环境”。标记“离开环境”的就回收内存
工作流程：
垃圾回收器，在运行的时候会给存储在内存中的所有变量都加上标记
去掉环境中的变量以及被环境中的变量引用的变量的标记
再被加上标记的会被视为准备删除的变量
垃圾回收器完成内存清除工作，销毁那些带标记的值并回收他们所占用的内存空间</pre>    
</details>

## 21.**什么是进程、什么是线程、它们之间是什么关系**

<details>
<summary>展开查看</summary>
<pre>1、进程：
1.1）程序执行时的一个实例
1.2）每个进程都有独立的内存地址空间
1.3）系统进行资源分配和调度的基本单位
1.4）进程里的堆，是一个进程中最大的一块内存，被进程中的所有线程共享的，进程
创建时分配，主要存放 new 创建的对象实例
1.5）进程里的方法区，是用来存放进程中的代码片段的，是线程共享的
 1.6）在多线程 OS 中，进程不是一个可执行的实体，即一个进程至少创建一个线程
去执行代码
2、线程：
2.1）进程中的一个实体
2.2）进程的一个执行路径
2.3）CPU 调度和分派的基本单位
2.4）线程本身是不会独立存在
2.5）当前线程 CPU 时间片用完后，会让出 CPU 等下次轮到自己时候在执行
2.6）系统不会为线程分配内存，线程组之间只能共享所属进程的资源
2.7）线程只拥有在运行中必不可少的资源(如程序计数器、栈)
2.8）线程里的程序计数器就是为了记录该线程让出 CPU 时候的执行地址，待再次分配到
时间片时候就可以从自己私有的计数器指定地址继续执行
2.9）每个线程有自己的栈资源，用于存储该线程的局部变量和调用栈帧，其它线程 无
权访问
3、关系：
3.1）一个程序至少一个进程，一个进程至少一个线程，进程中的多个线程是共享进 程
的资源
3.2）Java 中当我们启动 main 函数时候就启动了一个 JVM 的进程，而 main 函数所在线
程就是这个进程中的一个线程，也叫做主线程
3.3）一个进程中有多个线程，多个线程共享进程的堆和方法区资源，但是每个线程 有
自己的程序计数器，栈区域</pre>    
</details>

## 22.**什么是任务队列？**

<details>
<summary>展开查看</summary>
<pre>任务队列（task queue）主要分两种：
1、宏任务（macrotask）：在新标准中叫 task
1.1）主要包括：script(整体代码)，setTimeout，setInterval，setImmediate，I/O，
ui rendering
2、微任务（microtask）：在新标准中叫 jobs
2.1）主要包括：process.nextTick， Promise，MutationObserver（html5 新特性）
 3、扩展：
3.1）同步任务：在主线程上，排队执行的任务，只有前一个任务执行完毕，才能执
行后一个任务
 3.2）异步任务：不进入主线程，而进入“任务队列”的任务，只有“任务队列”
通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行</pre>    
</details>

## 23.**栈和队列的区别？**

<details>
<summary>展开查看</summary>
<pre>1、栈的插入和删除操作都是在一端进行的，而队列的操作却是在两端进行的
2、队列先进先出，栈先进后出
3、栈只允许在一端进行插入和删除，而队列允许在一端进行插入，在另一端进行删除</pre>    
</details>

## 24.**栈和堆的区别？**

<details>
<summary>展开查看</summary>
<pre>1、栈区（stack）— 由编译器自动分配释放 ，存放函数的参数值，局部变量的值等。 堆
区（heap） — 一般由程序员分配释放， 若程序员不释放，程序结束时可能由 OS 回收
2、堆（数据结构）：堆可以被看成是一棵树，如：堆排序； 栈（数据结构）：一种先进后
出的数据结构</pre>    
</details>
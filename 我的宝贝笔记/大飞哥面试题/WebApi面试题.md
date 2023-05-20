# WebApi面试题

## 1.**什么是 dom？**

<details>
<summary>展开查看</summary>
<pre>什么是 dom
1、DOM 是 W3C（万维网联盟）的标准
2、DOM 定义了访问 HTML 和 XML 文档的标准
什么是 W3C
1、“W3C 文档对象模型 （DOM） 是中立于平台和语言的接口，它允许程序和脚本动
态地访问和更新文档的内容、结构和样式。”
2、W3C DOM 标准被分为 3 个不同的部分
2.1）核心 DOM - 针对任何结构化文档的标准模型
2.2）XML DOM - 针对 XML 文档的标准模型
2.3）HTML DOM - 针对 HTML 文档的标准模型
备注：DOM 是 Document Object Model（文档对象模型）的缩写</pre>    
</details>

## 2.**dom 节点的 Attribute 和 Property 有何区别？**

<details>
<summary>展开查看</summary>
<pre>1、什么是 Property 每 个 DOM 节点都是一个 object 对象，有自己的 property 和 method
原则上 property 应该仅供 js 操 作 ， 不 会 出 现 在 html 中 （ 默 认 属 性 除 外 ：
id/src/href/className/dir/title/lang 等），和其他 js object 一样，自定义的 property 也
会出现在 object 的 for…in 遍历中
2、什么是 Attribute 
attribute 出现 在 dom 中，js 提供了 getAttribute/setAttribute 等方法来获取和改变它
的值，最后作用于 html 中，可以影响 innerHTML 获取的值。可以通过访问 dom 节点的 attributes
属性来获取 改节点的所有的 attribute。（在 IE<9 中,attribute 获取和改变的实际上是
property。）
3、两者之间的区别是 
3.1）自定义的 Property 与 Attribute 不同步,不相等
3.2）非自定义的 DOM property 与 attributes 是有条件同步的
3.3）非自定义的属性(id/src/href/name/value 等)，通过 setAttribute 修改其特性
值可以同步作用到 property 上，而通过.property 修改属性值有的(value)时候不会同步到
attribute 上，即不会反应到 html 上(除以下几种情况，非自定义属性 在二者之间是同步的)。</pre>    
</details>

## 3.**dom 结构操作怎样添加、移除、移动、复制、创建和查找节点？**

<details>
<summary>展开查看</summary>
<pre>1、创建新节点 
createDocumentFragment() //创建一个 DOM 片段
createElement() //创建一个具体的元素
createTextnode() //创建一个文本节点
2、添加、移除、替换、插入 
appendChild()
removeChild()
replaceChild()
insertBefore() //并没有 insertAfter()
3、查找 
getElementsByTagName() //通过标签名称
getElementsByName() //通过元素的 Name 属性的值(IE 容错能力较强，
会得到一个数组，其中包括 id 等于 name 值的)
getElementById() //通过元素 Id，唯一性</pre>    
</details>

## 4.**dom 事件模型？**

<details>
<summary>展开查看</summary>
<pre>DOM 事件模型。
DOM 事件模型分为两种：事件捕获和事件冒泡。
事件捕获以点击事件为例，同类型事件会由 根—>目标的祖先素—>目标的父元素—>目标
元素
事件冒泡和事件捕获截然相反。从内到外依次触发：目标元素—>目标元素的父元素—>父元
素的父元素—>根
事件传播
事件捕获和事件冒泡都有事件传播阶段，传播阶段就是事件从触发开始到结束的过程。
优先级：先捕获，再冒泡。
两种传播方式的来源：W3C 推行 DOM2 级事件之前网景和 IE 在打架，网景用的事件传播方式
是捕获，IE 用的事件传播方式是冒泡</pre>    
</details>

## 5.**什么是事件冒泡，它是如何工作的？如何阻止事件冒泡、默认行** 为?

<details>
<summary>展开查看</summary>
<pre>1、什么是事件冒泡，他是如何工作的
在一个对象上触发某类事件（比如单击 onclick 事件），这个事件会向这个对象的父级对象
传播，从里到外，直至它被处理（父级对象所有同类事件都将被激活），或者它到达了对象层次
的最顶层，即 document 对象（有些浏览器是 window） 2、阻止事件冒泡的方法
2.1）w3c 方法是：event.stopPropagation(); 事件处理过程中，阻止冒泡事件，但不会阻止默
认行为（跳转至超链接）
2.2）IE 则是使用 event.cancelBubble = true 阻止事件冒泡
2.3）return false; jq 里面事件处理过程中，阻止冒泡事件，也阻止默认行为（不跳转超
链接）
封装方法：
function bubbles(e){
 var ev = e || window.event;
 if(ev && ev.stopPropagation) {
 //非 IE 浏览器
 ev.stopPropagation();
 } else {
//IE 浏览器(IE11 以下)
ev.cancelBubble = true;
}
console.log("最底层盒子被点击了")
}
阻止默认行为：
w3c 的方法是 e.preventDefault()，IE 则是使用 e.returnValue = false;
封装：
//假定有链接<a href="http://caibaojian.com/" id="testA" >caibaojian.com</a>
var a = document.getElementById("testA");
a.onclick =function(e){
if(e.preventDefault){
e.preventDefault();
}else{
window.event.returnValue == false;
} }</pre>    
</details>

## 6.**event 对象的常见应用？**

<details>
<summary>展开查看</summary>
<pre>1、event.preventDefault(); // 阻止默认行为，阻止 a 链接默认的跳转行为
2、event.stopPropagation(); // 阻止冒泡
3、event.stopImmediatePropagation(); // 按钮绑定了 2 个响应函数，依次注册 a,b
两个事件，点击按钮，a 事件中加 event.stopImmediatePropagation()就能阻止 b 事件
4、event.currentTarget // 早期的 ie 不支持，当前绑定的事件
5、event.target</pre>    
</details>

## 7.**通用事件绑定/ 编写一个通用的事件监听函数？**

<details>
<summary>展开查看</summary>
<pre>function bindEvent(elem, type, selector, fn) {
if (fn == null) {
fn = selector;
selector = null;
}
elem.addEventListner(type, function(e) {
var target;
if (selector) {
target = e.target;
if (target.matches(selector)) {
fn.call(target, e);
}
} else {
fn(e);
}
})
}
// 使用代理
var div1 = document.getElementById('div1');
bindEvent(div1, 'click', 'a', function(e) {
console.log(this.innerHTML);
});
// 不使用代理
var a = document.getElementById('a1');
bindEvent(div1, 'click', function(e) {
console.log(a.innerHTML);
})</pre>    
</details>

## 8.**DOM 和 BOM 的区别**

<details>
<summary>展开查看</summary>
<pre>1、BOM
1.1) BOM 是 Browser Object Model 的缩写，即浏览器对象模型。
1.2） BOM 没有相关标准。
1.3） BOM 的最根本对象是 window
2、DOM
2.1） DOM 是 Document Object Model 的缩写，即文档对象模型。
2.2） DOM 是 W3C 的标准。
2.3） DOM 最根本对象是 document（实际上是 window.document）</pre>    
</details>

## 9.**事件三要素**

<details>
<summary>展开查看</summary>
<pre>1、事件源、就是你点的那个 div，触发的对象
2、事件类型、表示动作，比如点击、滑过等
3、事件处理函数（事件处理程序）、表示结果，比如点开关跳转到另一个页面</pre>    
</details>

## 10.**事件执行过程**

<details>
<summary>展开查看</summary>
<pre>事件捕获过程：当我们点击 TEXT 时，首先是 window->document->body->div->text.这个过
程称为事件捕获，W3C 浏览器的标准执行流程。
事件冒泡过程：text->div->body->document->window.这个过程称为事件冒泡。IE 浏览器
只支持冒泡，不支持捕获。W3C 浏览器先执行捕获，后执行冒泡</pre>    
</details>

## 11.**获取元素位置**

<details>
<summary>展开查看</summary>
<pre>1、通过元素的 offsetLeft 和 offsetTop
dom元素的offsetLeft、offsetTop 指的是元素相对于其offseParent 指定的坐标来说的。
 offsetParent：是指当前元素最近的经过定位的父级元素，如果没有则一直向上
直至 body。注意当前元素为 fixed 时，其 offsetParent 的值为 null
拓展：
offsetWidth/offsetHeight: width+padding+border
clientLeft/clientTop:表示内容区域的左上角相对于整个元素左上角的位置（包括边框）
// border 值
clientWidth/clientHeight: width+padding
scrollWidth:获取对象的滚动宽度
scrollHeight: 获取对象的滚动高度。
scrollLeft:设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离
scrollTop:设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离
window.screen.availHeight/window.screen.availWidth: 浏览器去除上方工具栏和下放
菜单栏可用宽高
window.screen.height/window.screen.width: 屏幕宽高
2、event.clientX 和 event.clientY
事件相对于浏览器窗口的水平和垂直距离
3、getBoundingClientRect
方法返回一个一个矩形对象，包含四个属性：left、top、right 和 bottom。分别表示元素
各边与页面上边和左边的距离</pre>    
</details>

## 12.**绑定事件和解除事件的区别**

<details>
<summary>展开查看</summary>
<pre>1、事件绑定 
定义：一个事件可以加多次，且不会覆盖
2、绑定方法 
2.1）attachEvent ('on+事件名'，函数名) 这个只兼容 ie 6-8
2.2）addEventListener (事件名，函数名，false) 支持 ie9+ chrom firfox
绑定事件的封装
function addEvent(obj,sEv,fn){
if(obj.addEventListener){
obj.addEventListener(sEv,fn,false);
}else{
obj.attachEvent('on'+sEv,fn);
}
};
解除绑定事件的封装
function removeEvent(obj,sEv,fn){
if(obj.removeEventListener){
obj.removeEventListener(sEv,fn,false);
}else{
obj.detachEvent('on'+sEv,fn);
}</pre>    
</details>

## 13.**谈谈事件委托的理解？**

<details>
<summary>展开查看</summary>
<pre>JavaScript 事件代理则是一种简单的技巧，把事件处理器添加到一个上级元素上，这样
就避免了把事件处理器添加到多个子级元素上。这主要得益于浏览器的事件冒泡机制。
优点： 1、减少事件注册，节省内存。
2、在 table 上代理所有 td 的 click 事件。
3、在 ul 上代理所有 li 的 click 事件。
4、简化了 dom 节点更新时，相应事件的更新。
5、不用在新添加的 li 上绑定 click 事件。
6、当删除某个 li 时，不用移解绑上面的 click 事件。
缺点： 1、事件委托基于冒泡，对于不冒泡的事件不支持
2、层级过多，冒泡过程中，可能会被某层阻止掉。
3、理论上委托会导致浏览器频繁调用处理函数，虽然很可能不需要处理。所以建议就近委托，
比如在 table 上代理 td，而不是在 document 上代理 td。 4、把所有事件都用代理就可能会出现事件误判。比如，在 document 中代理了所有 button 的
click 事件，另外的人在引用改 js 时，可能不知道，造成单击 button 触发了两个 click 事件</pre>    
</details>

## 14.**JavaScript 中的定时器有哪些？他们的区别及用法是什么？**

<details>
<summary>展开查看</summary>
<pre>1、JavaScript 中的定时器有以下几种
1）setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。
2）setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。由
setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。
setTimeout 也叫定时器
setInterval 也叫计时器</pre>    
</details>

## 15.**比较 attachEvent 和 addEventListener?**

<details>
<summary>展开查看</summary>
<pre>attachEvent 只能在 IE 浏览器给标签绑定事件, 可以多次绑定
语法：Element.attachEvent(Etype,EventName)
参数 Element:要为该元素动态添加一个事件
Etype:指定事件类型．比如：onclick,onkeyup,onmousemove 等
EventName:指定事件名称．也就是你写好的函数
addEventListenerW3C 标准, 除 IE 浏览器使用, 它给标签绑定事件
语法：Element.addEventListener(Etype,EventName,boole)
Etype:事件类型.比如：click,keyup,mousemove.注意使用 addEventListener 绑定事件时，设
置参数事件类型时不必写 on．否则会出错
EventName:要绑定事件的名称．也就是你写好的函数
boole:该参数是一个布尔值：默认 false．false 代表冒泡阶段执行, true 代表捕获阶段执行</pre>    
</details>

## 16.**document.write 和 innerHTML 的区别？**

<details>
<summary>展开查看</summary>
<pre>document.write 是直接写入到页面的内容流，如果在写之前没有调用 document.open, 
浏览器会自动调用 open。每次写完关闭之后重新调用该函数，会导致页面被重写
innerHTML 则是 DOM 页面元素的一个属性，代表该元素的 html 内容。
innerHTML 将内容写入某个 DOM 节点，不会导致页面全部重绘
innerHTML 很多情况下都优于 document.write，其原因在于其允许更精确的控制要
刷新页面的那一个部分</pre>    
</details>

## 17.**什么是 window 对象？什么是 document 对象？**

<details>
<summary>展开查看</summary>
<pre>1、什么是 window 对象 
简单来说，document 是 window 的一个对象属性。
Window 对象表示浏览器中打开的窗口。
如果文档包含框架（frame 或 iframe 标签），浏览器会为 HTML 文档创建一个
window 对象，并为每个框架创建一个额外的 window 对象。
所有的全局函数和对象都属于 Window 对象的属性和方法。
它是一个顶层对象,而不是另一个对象的属性，即浏览器的窗口。
属性
defaultStatus 缺省的状态条消息
document 当前显示的文档(该属性本身也是一个对象)
frame 窗口里的一个框架((FRAME>)(该属性本身也是一个对象)
frames array 列举窗口的框架对象的数组,按照这些对象在文档中出现的顺序列出
(该属性本身也是一个对象)
history 窗口的历史列表(该属性本身也是一个对象)
length 窗口内的框架数
location 窗口所显示文档的完整(绝对)URL(该属性本身也是一个对象)不要把它与
如 document.location 混淆,后者是当前显示文档的 URL。用户可以改变 window.location(用另
一个文档取代当前文档),但却不能改变 document.location (因为这是当前显示文档的位置)
name 窗口打开时,赋予该窗口的名字
opener 代表使用 window.open 打开当前窗口的脚本所在的窗口(这是 Netscape 
Navigator 3.0beta 3 所引入的一个新属性)
parent 包含当前框架的窗口的同义词。frame 和 window 对象的一个属性
self 当前窗口或框架的同义词
status 状态条中的消息
top 包含当前框架的最顶层浏览器窗口的同义词
window 当前窗口或框架的同义词,与 self 相同
方法
alert() 打开一个 Alert 消息框
clearTimeout() 用来终止 setTimeout 方法的工作
close() 关闭窗口
confirm() 打开一个 Confirm 消息框,用户可以选择 OK 或 Cancel,如果用户单击 OK,
该方法返回 true,单击 Cancel 返回 false
blur() 把焦点从指定窗口移开(这是 Netscape Navigator 3.0 beta 3 引入的新方
法)
focus() 把指定的窗口带到前台(另一个新方法)
 open() 打开一个新窗口
 prompt() 打开一个 Prompt 对话框,用户可向该框键入文本,并把键入的文本返回
到脚本
 setTimeout() 等待一段指定的毫秒数时间,然后运行指令事件处理程序事件处
理程序
 onload() 页面载入时触发
 onunload() 页面关闭时触发</pre>    
</details>

## 18.**什么是 document 对象**

<details>
<summary>展开查看</summary>
<pre>[document 对象]
该对象是 window 和 frames 对象的一个属性,是显示于窗口或框架内的一个文档。
属性
alinkColor 活动链接的颜色(ALINK)
anchor 一个 HTMI 锚点,使用<A NAME=>标记创建(该属性本身也是一个对象)
anchors array 列出文档锚点对象的数组(<A NAME=>)(该属性本身也是一个对象)
bgColor 文档的背景颜色(BGCOLOR)
cookie 存储于 cookie.txt 文件内的一段信息,它是该文档对象的一个属性
fgColor 文档的文本颜色(<BODY>标记里的 TEXT 特性)
form 文档中的一个窗体(<FORM>)(该属性本身也是一个对象)
forms anay 按照其出现在文档中的顺序列出窗体对象的一个数组(该属性本身也是一
个对象)
lastModified 文档最后的修改日期
linkColor 文档的链接的颜色,即<BODY>标记中的 LINK特性(链接到用户没有观察到的
文档)
link 文档中的一个<A HREF=>标记(该属性本身也是一个对象)
links array 文档中 link 对象的一个数组,按照它们出现在文档中的顺序排列(该属性
本身也是一个对象)
location 当前显示文档的 URL。用户不能改变 document.location(因为这是当前显示
文 档 的 位 置 ) 。 但 是 , 可 以 改 变 window.location ( 用 其 它 文 档 取 代 当 前 文
档)window.location 本身也是一个对象,而 document.location 不是对象
referrer 包含链接的文档的 URL,用户单击该链接可到达当前文档
title 文档的标题((TITLE>)
vlinkColor 指向用户已观察过的文档的链接文本颜色,即<BODY>标记的 VLINK 特性
方法
clear 清除指定文档的内容
close 关闭文档流
open 打开文档流
write 把文本写入文档
writeln 把文本写入文档,并以换行符结尾
区别: 1、window 指窗体。document 指页面。document 是 window 的一个子对象。
2、用户不能改变 document.location(因为这是当前显示文档的位置)。但是,可以改变
window.location (用其它文档取代当前文档)window.location 本身也是一个对象,而
document.location 不是对象</pre>    
</details>

## 19.**Js 拖动的原理？**

<details>
<summary>展开查看</summary>
<pre>js 的拖拽效果主要用到以下三个事件：
mousedown 鼠标按下事件
mousemove 鼠标移动事件
mouseup 鼠标抬起事件
当点击 dom 的时候，记录当前鼠标的坐标值，也就是 x、y 值，以及被拖拽的 dom 的
top、left 值，而且还要在鼠标按下的回调函数里添加鼠标移动的事件：
document.addEventListener("mousemove", moving, false)
和添加鼠标抬起的事件
document.addEventListener("mouseup",function() {
document.removeEventListener("mousemove", moving, false);}, false);
这个抬起的事件是为了解除鼠标移动的监听，因为只有在鼠标按下才可以拖拽，抬起
就停止不会移动了。
当鼠标按下鼠标移动的时候，记录移动中的 x、y 值，那么这个被拖拽的 dom 的 top 和
left 值就是：
top=鼠标按下时记录的 dom 的 top 值+（移动中的 y 值 - 鼠标按下时的 y 值）
left=鼠标按下时记录的 dom 的 left 值+（移动中的 x 值 - 鼠标按下时的 x 值）;</pre>    
</details>

## 20.**描述浏览器的渲染过程，DOM 树和渲染树的区别**

<details>
<summary>展开查看</summary>
<pre>1、浏览器的渲染过程： 
解析 HTML 构建 DOM(DOM 树)，并行请求 css/image/js
CSS 文件下载完成，开始构建 CSSOM(CSS 树)
CSSOM 构建结束后，和 DOM 一起生成 Render Tree(渲染树)
布局(Layout)：计算出每个节点在屏幕中的位置
显示(Painting)：通过显卡把页面画到屏幕上
2、DOM 树 和 渲染树 的区别 
 DOM 树与 HTML 标签一一对应，包括 head 和隐藏元素
 渲染树不包括 head 和隐藏元素，大段文本的每一个行都是独立节点，每一个节点都
有对应的 css 属性</pre>    
</details>

## 21.**如何最小化重绘(repaint)和回流(reflow)**

<details>
<summary>展开查看</summary>
<pre>什么是重绘 Repaint 和重排 （回流 reflow）
重绘:当元素的一部分属性发生改变，如外观、背景、颜色等不会引起布局变化，只需要浏览器
根据元素的新属性重新绘制，使元素呈现新的外观叫做重绘。
重排（回流）:当 render 树中的一部分或者全部因为大小边距等问题发生改变而需要 DOM 树重
新计算的过程
重绘不一定需要重排（比如颜色的改变），重排必然导致重绘（比如改变网页位置）
方法：
1、需要要对元素进行复杂的操作时，可以先隐藏(display:"none")，操作完成后再显示
2、需要创建多个 DOM 节点时，使用 DocumentFragment 创建完后一次性的加入 document
缓存 Layout 属性值，如：var left = elem.offsetLeft; 这样，多次使用 left 只产生一次回
流3、尽量避免用 table 布局（table 元素一旦触发回流就会导致 table 里所有的其它元素回流）
4、避免使用 css 表达式(expression)，因为每次调用都会重新计算值（包括加载页面）
5、尽量使用 css 属性简写，如：用 border 代替 border-width, border-style, border-color
6、批量修改元素样式：elem.className 和 elem.style.cssText 代替 elem.style.xxx</pre>    
</details>

## 22.**Js 延迟加载的方式有哪些？**

<details>
<summary>展开查看</summary>
<pre>js 的延迟加载有助与提高页面的加载速度
JS 延迟加载，也就是等页面加载完成之后再加载 JavaScript 文件
一般有以下几种方式：使用 setTimeout 延迟方法
让 JS 最后加载
1、defer 属性
用途：表明脚本在执行时不会影响页面的构造。也就是说，脚本会被延迟到整个页面都
解析完毕之后再执行
在&lt;script&gt;元素中设置 defer 属性，等于告诉浏览器立即下载，但延迟执行
说明：虽然&lt;script&gt;元素放在了&lt;head&gt;元素中，但包含的脚本将延迟浏览器遇到
标签后再执行
HTML5 规范要求脚本按照它们出现的先后顺序执行。在现实当中，延迟脚本并不一定会
按照顺序执行
defer 属性只适用于外部脚本文件。支持 HTML5 的实现会忽略嵌入脚本设置的 defer
属性
2、 async 属性
HTML5 为&lt;script&gt;标签定义了 async 属性。与 defer 属性类似，都用于改变处理脚本
的行为。同样，只适用于外部脚本文件。标签定义了 async 属性。与 defer 属性类似，都用
于改变处理脚本的行为。同样，只适用于外部脚本文件
目的：不让页面等待脚本下载和执行，从而异步加载页面其他内容。异步脚本一定会在
页面 load 事件前执行。不能保证脚本会按顺序执行
async 和 defer 一样，都不会阻塞其他资源下载，所以不会影响页面的加载。
缺点：不能控制加载的顺序
3、动态创建 DOM 方式
4、使用 jQuery 的 getScript()方法
5、使用 setTimeout 延迟方法的加载时间
延迟加载 js 代码，给网页加载留出更多时间
6、让 JS 最后加载
把 js 外部引入的文件放到页面底部，来让 js 最后引入，从而加快页面加载速度
例如引入外部 js 脚本文件时，如果放入 html 的 head 中,则页面加载前该 js 脚本就会
被加载入页面，而放入 body 中，则会按照页面从上倒下的加载顺序来运行 JavaScript 的
代码
所以我们可以把 js 外部引入的文件放到页面底部，来让 js 最后引入，从而加快页面
加载速度
这段代码意思等到整个文档加载完后，再加载外部文件“defer.js”。
使用此段代码的步骤：
6.1）复制上面代码
6.2）粘贴代码到 HTML 的标签前 (靠近 HTML 文件底部)
6.3）修改“defer.js”为你的外部 JS 文件名
6.4）确保你文件路径是正确的。例如：如果你仅输入“defer.js”，那么“defer.js”
文件一定与 HTML 文件在同一文件夹下。
注意：
这段代码直到文档加载完才会加载指定的外部 js 文件。因此，不应该把那些页面正常
加载需要依赖的 javascript 代码放在这里。而应该将 JavaScript 代码分成两组。一组是
因页面需要而立即加载的 javascript 代码，另外一组是在页面加载后进行操作的
javascript 代码(例如添加 click 事件或其他东西)。这些需等到页面加载后再执行的
JavaScript 代码，应放在一个外部文件，然后再引进来
在元素中设置 defer 属性，等于告诉浏览器立即下载，但延迟执行元素中设置 defer 属
性，等于告诉浏览器立即下载，但延迟执行元素中设置 defer 属性，等于告诉浏览器立即下
载，但延迟执行
</pre>    
</details>

## 23.**IE 与标准事件模型有哪些差别？**

<details>
<summary>展开查看</summary>
<pre>1. 添加事件
DOM 事件模型 – addEventListener
addEventListener(eventType, handler, useCapture)
eventType 不带有 on 字符串；
handler 参数是一个事件句柄，这个函数或方法带有一个事件对象参数；
useCapture 参数决定了事件句柄触发在哪种事件传播阶段，如果 useCapture 为 true
则为捕获阶段，反之则为冒泡阶段。
IE 事件模型 – attachEvent
attachEvent(eventType, handler)
eventType 带 on 字符串；
handler 参数是一个事件句柄，这个函数或方法带有一个事件对象参数；
2. 事件过程
DOM 事件模型包含捕获阶段和冒泡阶段，IE 事件模型只包含冒泡阶段；
DOM 事件模型可使用 e.stopPropagation()来阻止事件流</pre>    
</details>
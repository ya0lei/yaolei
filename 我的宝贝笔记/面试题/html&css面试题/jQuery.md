# jQuery面试题

## 1.**jQuery 的$(document).ready(function () {})，$(function ()** {})与原生 JS 的 window.onload 有什么不同？**

<details>
<summary>展开查看</summary>
<pre>1.执行时间
window.onload 必须等到页面内包括图片、音频、视频在内的所有元素加载完毕后才能执行
$(document).ready()是 DOM 结构绘制完毕后就执行，而无需对图像或外部资源加载的等待，从
而执行起来更快
2.编写个数不同
window.onload 不能同时编写多个，如果有多个 window.onload 方法，只会执行一个
$(document).ready()可以同时编写多个，并且都可以得到执行
3.简化写法
window.onload 没有简化写法
$(document).ready(function(){})可以简写成$(function(){})</pre>    
</details>

## 2.**jQuery 和 Zepto 的区别？各自的使用场景？**

<details>
<summary>展开查看</summary>
<pre>1、同： 1）Zepto 最初是为移动端开发的库，是 jQuery 的轻量级替代品，因为它的 API 和 jQuery 相似，
而文件更小
2）Zepto 最大的优势是它的文件大小，只有 8k 多，是目前功能完备的库中最小的一个，尽
管不大，Zepto 所提供的工具足以满足开发程序的需要
3）大多数在 jQuery 中常用的 API 和方法 Zepto 都有
4）因为 Zepto 的 API 大部分都能和 jQuery 兼容，所以用起来极其容易，如果熟悉 jQuery，
就能很容易掌握 Zepto。 2、异： 1）Zepto 更轻量级
2）Zepto 是 jQuery 的精简，针对移动端去除了大量 jQuery 的兼容代码
3）针对移动端程序，Zepto 有一些基本的触摸事件可以用来做触摸屏交互（tap 事件、swipe 事
件），Zepto 是不支持 IE 浏览器的。
4）DOM 操作的区别：添加 id 时 jQuery 不会生效而 Zepto 会生效
5）事件触发的区别：使用 jQuery 时 load 事件的处理函数不会执行；使用 zepto 时 load 事件的
处理函数会执行
6）事件委托的区别：zepto 中，选择器上所有的委托事件都依次放入到一个队列中，而在 jQuery
中则委托成独立的多个事件
7）width() 与 height()的区别：zepto 由盒模型（box-sizing）决定，用.width()返回赋值的
width，用.css(‘width’)返回 border 等的结果；jQuery 会忽略盒模型，始终返回内容区域的
宽/高（不包含 padding、border） 8）offset()的区别：zepto 返回{top,left,width,height}; jQuery 返回{width,height}。zepto
无法获取隐藏元素宽高，jQuery 可以
9）zepto 中没有为原型定义 extend 方法而 jQuery 有
10）zepto 的 each 方法只能遍历数组，不能遍历 JSON 对象</pre>    
</details>

## 3.**你是如何使用 jQuery 中的 ajax 的？**

<details>
<summary>展开查看</summary>
<pre>1、$.ajax，这个是 jQuery 对 ajax 封装的最基础函数，通过使用这个函数可以完成异步通讯的
所有功能。也就是说什么情况下我们都可以通过此方法进行异步刷新的操作。但是它的参数较多，
有的时候可能会麻烦一些。看一下常用的参数：
var configObj = {
method //数据的提交方式：get 和 post
url //数据的提交路劲
async //是否支持异步刷新，默认是 true
data //需要提交的数据
dataType //服务器返回数据的类型，例如 xml,String,Json 等
success //请求成功后的回调函数
error //请求失败后的回调函数
}
$.ajax(configObj);//通过$.ajax 函数进行调用。
2、$.post，这个函数其实就是对$.ajax 进行了更进一步的封装，减少了参数，简化了操作，但
是运用的范围更小了。$.post 简化了数据提交方式，只能采用 POST 方式提交。只能是异步访问
服务器，不能同步访问，不能进行错误处理。在满足这些情况下，我们可以使用这个函数来方便
我们的编程，它的主要几个参数，像 method，async 等进行了默认设置，我们不可以改变的。
url:发送请求地址。
data:待发送 Key/value 参数。
callback:发送成功时回调函数。
type:返回内容格式，xml, html, script, json, text,_default。 3、$.get，和$.post 一样，这个函数是对 get 方法的提交数据进行封装，只能使用在 get 提交
数据解决异步刷新的方式上，使用方式和$.post 差不多。
4， $.getJSON，这个是进一步的封装，也就是对返回数据类型为 Json 进行操作。里边就三个参
数，需要我们设置，非常简单：url,[data],[callback]</pre>    
</details>

## 4.**jQuery 的常用的方法增、删、复制、改、查**

<details>
<summary>展开查看</summary>
<pre>1、插入
append(content) ：将 content 内容插入到匹配元素内容的最后
prepend(content) ：将 content 内容插入到匹配元素内容的最前
2、删除
empty()将内容清空标签还在
remove()指定的标签和内容都移除
3、复制
clone( [true] )
参数说明：有 true：克隆元素和元素绑定的事件，没有 true：只克隆元素
4、替换
replaceWith()
5、查找
eq(index)：查找指定下标的元素下标从 0 开始
filter(expr)：过滤匹配的 class 选择器，其实就是缩小范围查找
not(expr)：排除匹配指定选择器之外的元素
next([expr])：查找指定元素下一个元素
prev([expr])：查找指定元素的上一个元素
parent([expr])：查找当前元素的父元素</pre>    
</details>

## 5.**jQuery 中$.get()提交和$.post()提交的区别？**

<details>
<summary>展开查看</summary>
<pre>相同点：都是异步请求的方式来获取服务端的数据；
异同点：1、请求方式不同：$.get() 方法使用 GET 方法来进行异步请求的。$.post() 方法使
用 POST 方法来进行异步请求的。
2、参数传递方式不同：get 请求会将参数跟在 URL 后进行传递，而 POST 请求则是作为 HTTP 消
息的实体内容发送给 Web 服务器的，这种传递是对用户不可见的。
3、数据传输大小不同：get 方式传输的数据大小不能超过 2KB 而 POST 要大的多
4、安全问题：GET 方式请求的数据会被浏览器缓存起来，因此有安全问题</pre>    
</details>

## 6.**简单的讲叙一下 jQuery 是怎么处理事件的，你用过哪些事件？**

<details>
<summary>展开查看</summary>
<pre>首先去加载文档，在页面加载完毕后，浏览器会通过 javascript 为 DOM 元素添加事件
jQuery 中的常用事件
.click()鼠标单击触发 du 事件
.dblclick()双击触发
.mousedown()/up()鼠标按下/弹起触发事件
.mousemove()，鼠标移动事件；.mouseover()/out()，鼠标移入/移出触发事件
.mouseenter()/leave()鼠标进入/离开触发事件
.hover(func1,func2)，鼠标移入调用 func1 函数，移出调用 func2 函数
.focusin()，鼠标聚焦到该元素时触发事件
.focusout()，鼠标失去焦点时触发事件
. focus()/.blur()鼠标聚焦/失去焦点触发事件（不支持冒泡）
.change()，表单元素发生改变时触发事件
.select()，文本元素被选中时触发事件
.submit()，表单提交动作触发
.keydown()/up()，键盘按键按下/弹起触发
.on()，多事件的绑定</pre>    
</details>

## 7.**你使用过 jQuery 中的动画吗，是怎样用的？**

<details>
<summary>展开查看</summary>
<pre>使用过。
1）hide()和 show()同时修改多个样式属性，像高度，宽度，不透明度；
2）fadeIn()和 fadeOut()fadeTo()只改变不透明度
3）slideUp()和 slideDown()slideToggle()只改变高度；
4）animate()属于自定义动画的方法.</pre>    
</details>

## 8.**你在 jQuery 中使用过哪些插入节点的方法，它们的区别是什么？**

<details>
<summary>展开查看</summary>
<pre>append(),
appendTo(),
prepend(),
prependTo(),
after(),
insertAfter()，
before(),
insertBefore()大致可以分为内部追加和外部追加
append()表示向每个元素内部追加内容
appendTo()将所有匹配的元素追加到指定的元素中
prepend()：向每个匹配的元素内部前置添加内容
prependTo()：将所有匹配的元素前置到指定的元素中
after()：在每个匹配元素之后插入内容
insertAfter()：将所有配的元素插入到指定元素的后面</pre>    
</details>

## 9.**jQuery 中如何来获取或设置属性？**

<details>
<summary>展开查看</summary>
<pre>jQuery 中可以用 attr()方法来获取和设置元素属性，removeAttr()方法来删除元素属性</pre>    
</details>

## 10.**jQuery 如何设置和获取 HTML、文本和值？**

<details>
<summary>展开查看</summary>
<pre>1、html()方法：如果想更改或者是设置 HTML 的内容，我们可以使用 html()方法，首先我们先
使用这个方法获取元素里面的内容 var html=$("p").html()。如果需要设置某元素的 HTML 代
码，那么我们就可以使用此方法加上一个参数。此方法只能应用于 XHTML 中，不能用于 xml。 2、text()方法，去设置某个元素中的文本内容，代码是 var text=$("p").text();如果想设置
文本同样需要给它传一个参数。
3、val()方法，可以用来设置和获取元素的值，它不仅仅可以设置元素，同时也能获取元素，另
外，它能是下拉列表框，多选框，和单选框相应的选项被选中，在表单操作中会经常用到。</pre>    
</details>

## 11.**有哪些查询节点的选择器？**

<details>
<summary>展开查看</summary>
<pre>:first 查询第一个
:last 查询最后一个
:odd 查询奇数但是索引从 0 开始
:even 查询偶数
:eq(index)查询相等的
:gt(index)查询大于 index 的
:lt 查询小于 index:header 选取所有的标题等</pre>    
</details>

## 12.**jQuery 中的 hover()和 toggle()有什么区别？**

<details>
<summary>展开查看</summary>
<pre>1、hover()和 toggle()都是 jQuery 中两个合成事件
hover(fn1,fn2)：一个模仿悬停事件的方法。当鼠标移动到一个匹配的元素上面时，会触发指定
的第一个函数。当鼠标移出这个元素时，会触发指定的第二个函数
2、toggle(evenFn,oddFn):每次点击时切换要调用的函数。如果点击了一个匹配的元素，则触发
指定的第一个函数，当再次点击同一元素时，则触发指定的第二个函数。随后的每次点击都重复
对这两个函数的轮番调用</pre>    
</details>

## 13.**jQuery 中 detach()和 remove()方法的区别是什么?**

<details>
<summary>展开查看</summary>
<pre>detach()和 remove()作用相同，即移除被选元素，包括所有文本和子节点
不同之处在于 detach():移除被选元素，包括所有文本和子节点。会保留所有绑定的事件、附加的数据
remove():移除被选元素，包括所有文本和子节点。绑定的事件、附加的数据等都会被移除</pre>    
</details>

## 14.**$(this)和 this 关键字在 jQuery 中有何不同？**

<details>
<summary>展开查看</summary>
<pre>$(this)返回一个 jQuery 对象，你可以对它调用多个 jQuery 方法，比如用 text()获取文本，用
val()获取值等等。
而 this 代表当前元素，它是 JavaScript 关键词中的一个，表示上下文中的当前 DOM 元素。你不
能对它调用 jQuery 方法，直到它被$()函数包裹，例如$(this)</pre>    
</details>

## 15.**jQuery 中 attr()和 prop()的区别**

<details>
<summary>展开查看</summary>
<pre>1、对于 HTML 元素本身就带有的固有属性，或者说 W3C 标准里就包含有这些属性，更直观的说法
就是，编辑器里面可以智能提示出来的一些属性，如：src、href、value、class、name、id 等。
在处理时，使用 prop()方法。
2、对于 HTML 元素我们自定义的 DOM 属性，即元素本身是没有这个属性的，如：data-*。在处理
时，使用 attr()方法。
&lt;a href="#" id="link1" class="btn" action="delete">删除&lt;/a&gt;
这个例子里的&lt;agt;元素的 dom 属性值有"id、href、class 和 action"，很明显，前三个是固有属
性，而后面一个 action 属性是我们自己定义上去的
&lt;a&gt;元素本身是没有属性的。这种就是自定义的 dom 属性。处理这些属性时，建议使用 attr 方
法，使用 prop 方法对自定义属性取值和设置属性值时，都会返回 undefined 值。
像 checkbox，radio 和 select 这样的元素，选中属性对应“checked”和"selected"，这些也属
于固有属性，因此需要使用 prop 方法去操作才能获取正确答案</pre>    
</details>

## 16.**jQuery 库中的$()是什么？**

<details>
<summary>展开查看</summary>
<pre>$()函数是 jQuery()函数的别称，$()函数用于将任何对象包裹成 jQuery 对象，然后被允许调用
定义在 jQuery 对象上的多个不同方法。甚至可以将一个选择器字符串传入$()函数，它会返回一
个包含所有匹配的 DOM 元素数组的 jQuery 对象</pre>    
</details>

## 17.**jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深浅** 拷贝？

<details>
<summary>展开查看</summary>
<pre>深拷贝，深拷贝代码把 extend 函数的第一个参数设置为 true：（对原始对象属性所引用的对象
进行递归拷贝）
var newObject = $.extend(true, {},oldObject);
浅拷贝，浅拷贝代码 extend 函数里不传入第一个参数，默认为 false（只复制一份原始对象的
引用）
var newObject = $.extend({}, oldObject);</pre>    
</details>

## 18.**jQuery 的实现原理？**

<details>
<summary>展开查看</summary>
<pre>1、为了防止全局变量污染，把 jQuery 的代码写在一个自调用函数中
2、咱们平常使用的$实际上 jQuery 对外暴露的一个工厂函数
3、而构造函数在 jQuery 的内部叫 init，并且这个构造函数还被添加到了 jQuery 的原型中。当
我们调用工厂函数的时候返回的其实是一个构造函数的实例
4、jQuery 为了让第三方能够对其功能进行扩展，所以把工厂函数的原型与构造函数的原型保持
了一致。这样子对外暴露工厂函数，即可对原型进行扩展</pre>    
</details>


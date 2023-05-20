# Web API

API:应用程序接口,是一些预先定义的函数,给开发人员使用的工具

Web  API:浏览器提供的一套操作浏览器功能和页面元素的 API ( BOM 和 DOM ),针对浏览器提供的接口,主要对浏览器做交互效果

## 1.DOM

定义:**文档对象模型**（Document Object Model，简称 DOM，通过 DOM 接口可以改变网页的内容、结构和样式。

1.文档:**document**,html页面

2.元素:**element**,页面中所有标签都是元素

3.节点:**node**,网页中所有的内容(标签,属性,文本,注释)

### 1.获取元素

| id获取元素 | document.getElementById('id');           | 获得单个元素 |
| ---------- | ---------------------------------------- | ------------ |
| 标签名获取 | document.getElementsByTagName('标签名'); | 获得多个元素 |

html5新增的方法,*选择器的写法要加符号. #*

| 类名获取   | document.getElementsByClassName('类名'); | 获得多个元素         |
| ---------- | ---------------------------------------- | -------------------- |
| 选择器获取 | document.querySeletor('选择器');         | 满足条件的第一个元素 |
| 选择器获取 | document.querySelectorAll('选择器')      | 满足条件的多个元素   |

获取特殊元素

| 获取body | document.body            | 返回body元素对象 |
| -------- | ------------------------ | ---------------- |
| 获取html | document.documentElement | 返回html元素对象 |

### 2.事件基础

1.**事件源**(谁):事件被触发的对象

2.**事件类型**(怎么触发):触发方式

3.**事件处理程序**(做啥):事件触发后要执行的代码(函数形式)

#### 事件类型-鼠标事件

| 鼠标事件    | 触发条件                                                    |
| ----------- | ----------------------------------------------------------- |
| onclick     | 左键点击                                                    |
| onmouseover | 鼠标经过                                                    |
| onmouseout  | 鼠标离开                                                    |
| onfocus     | 获得焦点                                                    |
| onblur      | 失去焦点                                                    |
| onmousemove | 鼠标移动                                                    |
| onmouseup   | 鼠标弹起                                                    |
| onmousedown | 鼠标按下                                                    |
| mouseenter  | **鼠标经过**,只会经过自身盒子触发,经过子盒子不触发,没有冒泡 |
| mouseleave  | **鼠标离开**,同上,无冒泡                                    |
|             |                                                             |

#### 操作元素

DOM 操作可以改变网页内容、结构和样式，我们可以利用 DOM 操作元素来改变元素里面的内容 、属性等。

注:element代表元素,可以是div,span

| 元素的xxx            | 操作元素的 | 特点                                                     |
| -------------------- | ---------- | -------------------------------------------------------- |
| element.innerText    | 内容       | 起始位置到终止位置的内容,不识别html标签,不打印空格or换行 |
| element.innerHTML    | 内容       | 起始位置到终止位置的内容,识别html标签,打印空格or换行     |
| element.属性         | 内置属性   | 直接赋值修改                                             |
| element.style        | 样式       | 只能行内样式操作,css权重高                               |
| element.className    | 类名       | 更改类名达到修改样式的效果                               |
| input.value/disabled | 表单的属性 | value修改表单的内容/disabled=true可以禁用表单            |

##### 排他思想

1.所有元素全部清除样式(干死所有人,包括自己)

2.给当前元素设置样式(龙珠许愿复活)

##### 创建设置,移除属性(包括内置属性,自定义属性)

| 代码                                       | 作用             | 特点                                                         |
| ------------------------------------------ | ---------------- | ------------------------------------------------------------ |
| element.getAttribute('属性')               | 获取自定义属性   | 也可以获取部分内置属性:style,id,class                        |
| element.**removeAttribute**('属性')        | 移除自定义属性   | 可移除style,id,class                                         |
| element.**setAttribute**('date-属性名',值) | 设置h5自定义属性 | 可设置style,id,class;为了区分自定义属性与内置属性,h5规定自定义属性以date-开头.(自定义属性名,给属性赋值) |
| element.**getAttribute**('date-属性名')    | 获取h5自定义属性 |                                                              |
| element.dataset.属性名                     | 获取h5自定义属性 | ie11才支持                                                   |
| element.dataset['属性名']                  | 获取h5自定义属性 | ie11才支持                                                   |

**setAttribute**也可以**操作固有属性**,例:

**设置**修改行内样式style里面的值

```js
 div.setAttribute('style','height:100px;background-color:green;width:100px;border-radius:50%');
```



#### 节点操作

1.获取元素有两种方法,利用dom提供的方法,document.xxx;

**利用节点层级关系获取元素(父子,兄弟)**

2.网页中所有元素都可以称作**节点**,在DOM中,用**node**表示,一般情况,node拥有至少3个属性:1.nodeType:节点类型 2.nodeName:节点名称 3.nodeValue:节点值

3.**元素节点 nodeType=1;属性节点 nodeType=2;文本节点(文字,空格,换行)nodeType=3;**

##### 获取节点

###### 1.父子级

| 代码                                                | 节点层级       | 特点                                                         |
| --------------------------------------------------- | -------------- | ------------------------------------------------------------ |
| **node.parentNode**                                 | 父级节点       | 返回值为最近的一个父级节点,找不到则返回null                  |
| parentNode.childNodes                               | 子节点         | 返回值为所有子节点的集合,且集合会实时更新,子节点包含元素节点,文本节点 |
| parentNode.firstChild                               | 首位子节点     | 返回值为第一个子节点,找不到返回null                          |
| parentNode.lastChild                                | 末尾子节点     | 返回值为最后一个子节点,找不到返回null                        |
| parentNode**.ohildren**                             | 子元素节点     | 只读属性,只返回所有的子元素节点                              |
| parentNode**.firstElementChild**                    | 首位子元素节点 | 返回值为第一个子元素节点,找不到返回null                      |
| parentNode**.lastElementChild**                     | 末尾子元素节点 | 返回值为最后一个子元素节点,找不到返回null                    |
| prentNode**.children[0]**                           | 首位子元素节点 | 开发常用                                                     |
| prentNode**.children[prentNode.children.length-1]** | 末尾子元素节点 | 开发常用                                                     |

###### 2.兄弟级

| 代码                        | 节点层级 | 特点                                                |
| --------------------------- | -------- | --------------------------------------------------- |
| node.nextElementSibling     | 兄弟     | 返回值为当前元素的下一个兄弟元素节点,找不到返回null |
| node.previousElementSibling | 兄弟     | 返回值为当前元素的上一个兄弟元素节点,找不到返回null |

##### 创建节点

```
document.createElement('tagName')
```

##### 添加节点(把创建的节点放置在哪)

| 代码                                   | 作用                                                |
| -------------------------------------- | --------------------------------------------------- |
| node**.appendChild**(child)            | 将一个节点添加到父节点的列表末尾,就像::after        |
| node**.insertBefore**(child, 指定元素) | 将一个节点添加到父节点的指定子节点前面,就像::before |

##### 删除节点

```
node.remove()
```

直接删除自己

```js
node.removeChild(child) 
```

从DOM中删除一个元素子节点,返回值为被删除的节点

##### 克隆节点

```
node.cloneNode() 
```

**浅拷贝**:()内为空或者false,只克隆复制节点本身,不克隆里面的子节点

**深度拷贝**:()内为true,会复制节点本身以及里面所有的子节点

### 3.事件高级

#### 1.注册事件

定义:给元素添加事件,有两种方式,传统方式or方法监听注册方式

**传统方式**:以on开头的,如onclick,特点:唯一性,同一个元素同一个事件之只能设置一个处理函数,最后面的会覆盖前面的.

**方法监听注册方式**:addEventListener(),他是一个方法,同一个元素同一个事件可以注册多个监听器,按注册顺序执行.

```
事件源.addEventListener('type', listener[, useCapture]) 
```

例:

*给按钮添加点击事件*

```
  btn.addEventListener('click', function() {
            alert(22);
        })
```

**type**:事件类型,如点击:'click'

**listener**:事件处理函数,事件发生时,调用该监听函数

**useCapture**：可选参数，是一个布尔值，默认是 false,现在可忽略不写.

#### 2.删除事件

**传统方式**:

```
事件源.onclick=null;
```

**方法监听注册方式**: 

```
事件源.removeEventListener('type', listener,true/false);  
```
例:

```js
div.addEventListener('click', fn)
// 里面的fn 不需要调用,不加小括号
        function fn() {
            alert(22);
            div.removeEventListener('click', fn);
        }
```




```
事件源.detachEvent(eventNameWithOn, callback);
```

例:

```
div.attachEvent('onclick', fn);

        function fn() {
            alert(33);
            div.detachEvent('onclick', fn);
        }
```

####3.DOM事件流

定义:从页面接收事件的顺序,分三个阶段**:1.捕获阶段 2.当前目标阶段 3.冒泡阶段**

**事件冒泡(下到上)**:事件开始时由最具体的元素接受,逐级向上传播到DOM最顶层节点的过程.

**事件捕获(上到下)**:DOM最顶层节点开始,逐级向下传播到最具体元素的接收过程.

#### 4.事件对象

定义:event 对象代表事件的状态，比如键盘按键的状态、鼠标的位置、鼠标按钮的状态。

```
 eventTarget.onclick = function(event) {
 // 这个 event 就是事件对象，我们还喜欢的写成 e 或者 evt 
 } 
 eventTarget.addEventListener('click', function(event) {
 // 这个 event 就是事件对象，我们还喜欢的写成 e 或者 evt 
 }）
```

这个e是个形参,系统帮我们设定为事件对象,不需要传递实参过去,注册事件时,e对象会被系统自动创建,并依次传递给事件监听器(事件处理函数).

##### 1.事件对象的属性和方法

| 事件对象的属性和方法    | 说明                                    |
| ----------------------- | --------------------------------------- |
| **e.target**            | 返回触发事件的对象                      |
| e.srcElement            | 返回触发事件的对象                      |
| e.type                  | 返回事件的类型,如click,mouseover,不带on |
| e.cancelBubble          | 阻止事件冒泡(属性)                      |
| e.returnValue           | 阻止默认事件(属性)                      |
| **e.preventDefault()**  | 阻止默认事件                            |
| **e.stopPropagation()** | 阻止冒泡                                |

##### 鼠标事件对象

| 鼠标事件对象 | 说明                              |
| ------------ | --------------------------------- |
| e.clientX    | 鼠标相对于浏览器窗口可视区的X坐标 |
| e.clientY    | 鼠标相对于浏览器窗口可视区的Y坐标 |
| e.pageX      | 鼠标相对于文档页面的X坐标         |
| e.pageY      | 鼠标相对于文档页面的Y坐标         |
| e.screenX    | 鼠标相对于电脑屏幕的X坐标         |
| e.screenY    | 鼠标相对于电脑屏幕的Y坐标         |

##### 键盘事件

| 键盘事件   | 触发条件                                |
| ---------- | --------------------------------------- |
| onkeydown  | 某个键盘按键按下时触发                  |
| onkeypress | 某个键盘按下时并弹起时触发,不识别功能键 |
| onkeyup    | 某个键盘按键松开时触发                  |

##### 键盘事件对象

| 键盘事件对象 | 说明              |
| ------------ | ----------------- |
| e.keyCode    | 返回该键的ASCLL值 |



## 2.BOM

定义:浏览器对象模型,操作浏览器(刷新,前进,后退,滚动条...)

### window对象的常见事件

#### 1.窗口加载事件

定义:它是一个窗口(页面)加载事件,文档内容(图片,脚本文件,css文件...)全部加载完再触发该事件.

1.1.有了 **window.onload** **就可以把 JS 代码写到页面元素的上方**，因为 onload 是等页面内容全部加载完毕， 再去执行处理函数。

```
window.onload = function(){}
或者
window.addEventListener('load',function(){});

```

1.2.DOMContentLoaded 事件触发时，当DOM加载完成时就可以执行，不包括样式表，图片，flash等等。

```
document.addEventListener('DOMContentLoaded',function(){})
```

#### 2.调整窗口大小事件

窗口大小发生像素变化,就会触发这个事件

```
window.onresize = function(){}
window.addEventListener("resize",function(){});
```

#### 3.定时器

**3.1.setTimeout()定时器**

```
window.setTimeout(调用函数, [延迟的毫秒数]);
```

**3.2.停止setTimeout()定时器**

```
window.clearTimeout(timeoutID)
```

**3.3.setInterval()定时器**

```
window.setInterval(回调函数, [间隔的毫秒数]);
```

**3.4.停止setInterval()定时器**

```
window.clearInterval(intervalID);
```

#### 4.JS执行机制

JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。这是因为 Javascript 这门脚本语言诞生的使命所致——JavaScript 是为处理页面中用户的交互，以及操作 DOM 而诞生的。比如我们对某个 DOM 元素进行添加和删除操作不能同时进行。 应该先进行添加，之后再删除。

##### 1.同步异步

**同步**:同步任务都在主线程上执行,形成一个执行栈

**异步**:异步任务有三种类型:1.普通事件 2.资源加载 3.定时器,异步相关回调函数添加到任务队列中.

##### 2.location对象

| location对象方法              | 返回值                                   |
| ----------------------------- | ---------------------------------------- |
| location.assign()             | 相当于href,可以跳转页面                  |
| location.replace()            | 替换当前页面,不记录历史,不能返回上个页面 |
| location.reload()             | 刷新页面,参数为true,强制刷新(缓存也刷新) |
| **location.href;**            | 跳转页面,还可以赋值                      |
| **location.search;**          | 设置,获取网页地址跟在?后面的部分         |
| location.search**.substr(1)** | 截取内容,把?去掉                         |

##### 3.navigator对象

navigator 对象包含有关浏览器的信息，它有很多属性，我们最常用的是 userAgent，该属性可以返回由客户机发送服务器的 user-agent 头部的值。

下面前端代码可以判断用户那个终端打开页面，实现跳转

```
if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|
Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS
|Symbian|Windows Phone)/i))) {
 window.location.href = ""; //手机
} else {
 window.location.href = ""; //电脑
}
```

##### 5.history对象

| history对象方法 | 作用                                    |
| --------------- | --------------------------------------- |
| back()          | 后退功能                                |
| forward()       | 前进功能                                |
| go(参数)        | 参数=1,前进1个页面,参数=-1,后退一个页面 |

### PC端网页特效

##### 1.元素偏移量offset

offset:它是一个只读属性,只能获取不能赋值,想赋值去.style

| offset偏移量         | 作用                                                         |
| -------------------- | ------------------------------------------------------------ |
| element.offsetParent | 返回带有定位的父元素,没有定位则返回body                      |
| element.offsetTop    | 返回带有定位的父元素上方的偏移                               |
| element.offsetLeft   | 返回带有定位的父元素左方的偏移                               |
| element.offsetWidth  | 返回元素的宽度(包括内边距,边框的实际宽度),返回的是数值,不带单位 |
| element.offsetHeight | 返回元素的高度(同上)                                         |
| window.pageXOffset   | 页面x轴滚动的距离                                            |
| window.pageYOffset   | 页面Y轴滚动的距离                                            |

##### 2.元素可视区client

client:用来获取元素可视区的相关信息

| client客户端         | 作用                                                   |
| -------------------- | ------------------------------------------------------ |
| element.clientTop    | 返回元素上边框的大小                                   |
| element.clientLeft   | 返回元素左边框的大小                                   |
| element.clientWidth  | 返回自身的宽度(只包含padding,内容宽...),返回值不带单位 |
| element.clientHeight | 返回自身的高度(只包含padding,内容宽...),返回值不带单位 |

##### 3.元素滚动scroll

被页面卷去的距离:页面滚动被隐藏的长度

| scroll滚动的         | 作用                                                 |
| -------------------- | ---------------------------------------------------- |
| element.scrollTop    | 返回被卷去的上侧距离,数值不带单位                    |
| element.scorllLeft   | 返回被卷去的左侧距离,数值不带单位                    |
| element.scorllWidth  | 返回自身的宽度(不含padding,不含边框...),数值不带单位 |
| element.scorllHeight | 返回自身的高度(不含padding,不含边框...),数值不带单位 |

### 移动端网页特效

##### 1.触屏touch事件

| 触屏事件   | 说明                          |
| ---------- | ----------------------------- |
| touchstart | 手指触摸到一个DOM元素时触发   |
| touchmove  | 手指在一个DOM元素上滑动时触发 |
| touchend   | 手指从一个DOM元素上移开时触发 |

##### 2.触摸事件对象TouchEvent

| 触摸列表       | 说明                                           |
| -------------- | ---------------------------------------------- |
| touches        | 正在触摸屏幕的所有手指的一个列表               |
| targetTouches  | 正在触摸当前DOM元素上的手指的一个列表          |
| changedTouches | 手指状态发生了改变的列表,从无到有,从有到无变化 |

##### 3.classList属性

h5新增,返回元素的类名,可以添加,移除,切换css类,类名不加点.

添加类名

```
element.classList.add（’类名’）；
```

移除类名

```
element.classList.remove（’类名’）;
```

切换类名

```
element.classList.toggle（’类名’）；
```

### 本地存储

#####1.window.sessionStorage

关闭浏览器窗口数据消失,同一个页面下数据可以共享,键值对形式存储

| sessionStorage.setItem(key, value) | 存储数据     |
| ---------------------------------- | ------------ |
| sessionStorage.getItem(key)        | 获取数据     |
| sessionStorage.removeItem(key)     | 删除数据     |
| sessionStorage.clear()             | 删除所有数据 |

##### 2.window.localStorage

除非手动删除,否则数据一直存在,同一浏览器数据可以共享,键值对形式存储

| localStorage.setItem(key, value) | 存储数据     |
| -------------------------------- | ------------ |
| localStorage.getItem(key)        | 获取数据     |
| localStorage.removeItem(key)     | 删除数据     |
| localStorage.clear()             | 删除所有数据 |


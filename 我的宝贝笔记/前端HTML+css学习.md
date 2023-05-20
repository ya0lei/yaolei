

# 前端HTML+css学习

## HTML初识

#### 了解网页的基本结构：

```
<!DOCTYPE html>
<!-- 打开方式为网页 -->
<html lang="zh-CN">
<!-- 网页语言选：中文（zh-CN/GB/GBk）/英文（en） -->
<head>
<!-- 头部标签 -->
    <meta charset="UTF-8">
	<!-- 字符集：万国符 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>自定义内容</title>
	<!-- 标题 -->
</head>
<body>
<!-- 内容标签 -->
</body>
</html>
```

#### 常用的标签：

```
<h6></h6>
<!-- 标题标签h1~h6 -->
<p></p>
<!-- 段落标签 -->
<br>
<!-- 换行标签 -->
<strong></strong> <b></b>
<!-- 加粗 -->
<em></em> <i></i>
<!-- 倾斜 -->
<ins></ins> <u></u>
<!-- 下划线 -->
<del></del> <s></s>
<!-- 删除线 -->
<!-- 推荐使用字多的，语义更强烈 -->

<div></div>
<!-- 大盒子模型，独占一行显示 -->
<span></span>
<!-- 小盒子模型，占据一行中一格的空间 -->

```

#### 媒体标签与路径

图片标签，< 标签：属性名=属性值 >

```
<img src="图片的路径.jpg" />
<img src="图片的路径.jpg"  alt="替代文本" title="显示文本” height=“100” width=“100” />
```

绝对路径，从盘符开始或网址开头的路径

```
<img src="c:\绝对路径\绝对路径\" />  
<img src="https://www.w3school.com.cn" />
```

相对路径，目标文件基于HTML文件的相对位置

```
<img src="./同级目录" />
<img src="上级目录文件名/下级目录文件名" />
<img src="下级目录文件名../上级目录文件名" />
```

音视频标签

*autoplay:自动播放   muted：静音播放   loop：循环播放*

```
<audio src="MP3的路径"  controls autoplay loop” /></ audio >    
<video src="mp4的路径" controls autoplay muted loop ></ video >
```

#### 超链接标签

```
<a href="网址">文字或图片</a>

<a href="网址" target="_self">文字或图片</a>
<!-- target="_self",在当前页面打开链接 -->

<a href="网址" targht="_blank">文字或图片</a>
<!-- 在新窗口打开链接 -->

<a href="#" >
<!-- 空链接 -->

<a href="#自命名" >文字或图片</a>
<!-- 可跳转链接  -->

<h4 id="自命名">标题<h4>

<a href="文件">文字或图片</a> 
<!-- 直接下载文件 -->
```

注释标签（快捷键Ctrl+/ ）和特殊字符

```
<!--注释语句-->
&nbsp；
<!-- 空格 -->
&lt；
<!-- 小于号< -->
&gt;
<!-- 大于号> -->
&amp;
<!-- 和号& -->
```



#### 表格标签

*table:表格  thead:表格头部  tbody:表格主体  tfoot：表格底部   th：表格行   td：表格单元格*

```
<table align="center" border="1" cellpadding="10" cellspacing="0" width="400" height="400">
	<caption>表格标题</caption>
    <thead>
        <th>
            <th></th> <th></th> <th></th>
        </th>
    </thead>
    <tbody>
        <tr>
            <td></td> <td></td> <td></td>
        </tr>
        <tr></tr>
    </tbody>
    <tfoot>
        <tr>
            <td></td> <td></td> <td></td> 
        </tr>
    </tfoot>

</table>
```

**跨行合并：**

*从上向下出发，占据两个单元格的位置*

```
<td rowspan="2"></td>
```

**跨列合并**：

*从左向右出发，占据两个单元格的位置*

```
<td colspan="2"></td>
```



| 属性名:     | 属性值:           | 描述:                                     |
| :---------- | ----------------- | ----------------------------------------- |
| cellspacing | 像素值            | 规定单元格与单元格之间的的距离，默认2像素 |
| cellpadding | 像素值            | 规定内容与单元格边框的距离，默认1像素     |
| align       | left,center,right | 表格的对齐方式：居左，居中，居右          |
| width       | 像素值或百分比    | 规定表格的宽度                            |
| border      | 1或""             | 规定表格是否有边框，默认无                |



#### 列表标签：

```
    <!-- 有序列表 -->
    <ol>
        <li></li>
        <li></li>
        <li></li>
    </ol>

    <!-- 无序列表 -->
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>

    <!-- 自定义列表 -->
    <dl>
        <dt>
            <dd></dd>
        </dt>
        <dt>
            <dd></dd>
        </dt>
    </dl>
```

#### 表单标签

  表单域与表单元素：

```
<form action="收货地址" method=“发货方式” name=“什么货”>
    <input type="" />  
    
    <select >
        <option>选项</option>  <option selected="selected">默认选中选项 </option>        
    </select>
    <!-- 下拉表单元素 -->
    
    <textarea  cols="列数" rows=“行数”>文本域元素</textarea>
</ form>
```

  

```
<input type="" name=“定义元素的名称，自定义” value=“规定元素的值，可在文本中显示，自定义” chencked=“checked” maxlength=“6” placeholder="占位符，提示文本" /> 
<!-- 输入表单元素，chencked：默认选中，maxlength：最大字符数 -->
```



| 输入表单元素input                 | 属性值type           |
| --------------------------------- | -------------------- |
| <input type="text" name="" />     | 文本                 |
| <input type="password"  name=""/> | 密码                 |
| <input type="radio" name="" />    | 圆形单选按钮         |
| <input type="checkbox"  name=""/> | 方形多选按钮         |
| <input type="reset" name="" />    | 重置按钮             |
| <input type="submit" name="" />   | 提交按钮             |
| <input tyre="button"  name="" />  | 可点击按钮，与js交互 |
| <input type="file" multiple >     | 文件，multiple：多选 |
| <input type="date" name="" />     | 日历                 |

button按钮

```
<button type="reset">重置按钮</button>
<button type="submit">提交按钮</button>
<button type="button">普通按钮</button>
```



#### 元素定义（label）标签	

```
<label for="我取的名">内容</label>
点击可跳转
<input type="" id="我取的名" />
```

##### 有语义的div

| 标签    | 语义       |
| ------- | ---------- |
| header  | 网页头部   |
| nav     | 网页导航   |
| footer  | 网页底部   |
| aside   | 网页侧边栏 |
| section | 网页区块   |
| article | 网页文章   |



## CSS层叠样式表



#### 引入css样式表：

#####  1.行内式

<标签名 “style=属性1： 属性值；属性2： 属性值;”>内容</标签名>

##### 2.内部样式表

```
<head>
<style type="text/css">
   选择器{
      属性1： 属性值；
      属性2： 属性值；
      属性3： 属性值；
   }
</style>
</head>
```

##### 3.外部样式表de 链接标签 

```
<head>
   <link rel="stylesheet" type="text/css" href="css的路径名">  
</head>
```

**属性**：
rel:定义当前文档和被链接文件的关系
stylesheet：样式表文件
type：定义文档类型

#### CSS选择器

##### 1.类选择器

*类名为自定义*

```
   .类名 { 
      属性1： 属性值；
      属性2： 属性值；
      属性3： 属性值；
   }
```


```
<p class="类名"></p>
```

##### 2.id选择器

```
#id {
      属性1： 属性值；
      属性2： 属性值；
      属性3： 属性值；
   }

```

```
<p id="类名"></p>
```



##### 3.通配符选择器

*选中页面所有的标签

```
* {
      属性1： 属性值；
      属性2： 属性值；
      属性3： 属性值；
   }
```

#### font字体 

| 属性： 属性值                                | 属性     | 属性值                  |
| -------------------------------------------- | -------- | ----------------------- |
| font-size:  em/px;                           | 字体大小 | 1字符/像素              |
| font-family："Microsoft YaHei"；             | 字体     | 微软雅黑                |
| font-weight：normal/bold/bolder/lighter/900; | 字体粗细 | 正常400/加粗700/特粗900 |
| font-style：normal/italic                    | 字体风格 | 正常/倾斜               |

**综合性写法：**

**必须写字体大小，字体*

```
选择器 { font: 字体风格 字体粗细 字体大小/行高 字体; }  
```

####  文本样式

| 属性：属性值                                                 | 属性     | 属性值               |
| ------------------------------------------------------------ | -------- | -------------------- |
| color: #ff00ff/raba(255,255,255,0.5)/transparent;            | 颜色     | 十六进制/raba/透明   |
| text-align:  center;                                         | 文本对齐 | 居中                 |
| line-height： 24px;                                          | 行高     | 24px                 |
| text-indent: 2em;                                            | 首行缩进 | 2字符                |
| text-decoration: none/underline/overline/line-through/blink; | 文本装饰 | 无/下，上，中线/闪烁 |

 常见**字体系列**：无衬线字体sans-serif  衬线字体serif 等宽字体mono space,最后一项字体系列不要用引号包裹
谷歌浏览器默认字体是**16px**

让**span**,a,input,img水平居中，需给其父元素设置text-align;
让**块级元素**水平居中：div { margin : 0 auto; }

#### CSS的复合选择器he拓展

 **1.后代选择器**
元素1 元素2 { 样式声明 }                  例：ul li { color： pink; }

**2.子选择器**
元素1>元素2 { 样式声明 }                例：ul>li { color: pink; }

**3.并集选择器**
元素1，                                              例： div，
元素2 { 样式声明 }                                        p { color：pink；
                                                                    }

**4.交集选择器**

*选中同时能被两种选择器选中的标签*

元素1元素2 { 样式声明 }                    例： div.p { color：pink；}

**5.链接伪类选择器**

| a: link   | 选择所有未被访问的链接   |
| :-------- | ------------------------ |
| a:visited | 选择所有已被访问的链接   |
| a:hover   | 选择鼠标所在位置的链接   |
| a:active  | 选择鼠标按住未弹起的链接 |

**5.focus选择器**

*一般用于<input>表单元素，获得焦点显示效果哦*

*想要修改input框的样式,需要加outline-style: none;*

```
input: focus {
			  outline-style: none;
			  border: 1px solid red;
              background-color： pink；
              }	
```

**6.属性选择器**

| 选择器           | 功能                                  |
| ---------------- | ------------------------------------- |
| E[attr] {}       | 选择具有attr属性的E元素               |
| E[attr="val"] {} | 选择具有attr属性并且属性值=val的E元素 |



#### CSS元素显示模式

**块级元素**：如<div></div>,一个占一行，可容纳块级元素和行内元素，注：文字标签内不可以再放块级元素。
**行内元素**：如<span></span>，多个占一行，只可容纳行内元素。
**行内块元素**：如<img />多个占一行，中有空隙，可调节大小。

| 元素显示模式的转换    |                    |
| --------------------- | ------------------ |
| display: block        | 转换为：块元素     |
| display: inline       | 转换为：行内元素   |
| display: inline-block | 转换为：行内块元素 |

#### CSS背景

| 属性：属性值                                                 | 属性     | 属性值                           |
| ------------------------------------------------------------ | -------- | -------------------------------- |
| background-color： pink/transparent;                         | 背景颜色 | 粉/透明                          |
| background-image： url(图片路径);                            | 背景图片 |                                  |
| background-repeat: repeat /no-repeat /repeat-x /repeat-y     | 背景平铺 | 平铺，不平铺，横向平铺，纵向平铺 |
| background-position:  10px 10px/left center righ t top bottom; | 背景位置 | x，y/左，中，右，上，下          |
| background-attachment： scroll /fixed;                       | 背景附着 | 滚动/固定                        |

简写：

```
选择器 {
          background： 背景颜色 背景图片地址 背景平铺 背景滚动 背景图片位置/背景图片大小；
}
```

##### 背景图片大小

| 属性： 属性值                  | 值                         |
| ------------------------------ | -------------------------- |
| background-size：100px 100px； | 宽高                       |
| backfround-size： 100% 100%；  | 相对于盒子自身的宽高百分比 |
| background-size： contain；    | 等比例缩放，不会超出盒子   |
| background-size：  cover；     | 等比例缩放，将盒子填满     |



#### CSS盒子模型

| 属性：属性值                        | 属性     | 属性值                        |
| ----------------------------------- | -------- | ----------------------------- |
| border-color： pink；               | 边框颜色 | 粉                            |
| border-width： 3px；                | 边框宽度 | 3px                           |
| bordre-style:  solid/dotted/dashed; | 边框风格 | 实线/点线/虚线                |
| margin: 10px;                       | 外边距   | 10px                          |
| padding：10px 10px 10px 10px；      | 内边距   | 上右下左/上下 左右/上 左右 下 |

简写：

```
div {
        border： pink 3px solid;
}
```

**合并表格的边框**{表格合并：合并 1+1=1}

```
table { border-collapse：collapse； }   
```

**清除元素默认的内外边距：**

```
* { margin：0； padding：0；}
```

**css的特性**

自动內减：给定w，h，自动给你算大小
box-sizing: border-box;
去除列表的圆点
list-style： none
让行高和文字高度相同
line-height：1;
垂直布局的块级元素，上下外边距会合并
互相嵌套的块级元素在紧紧贴合的情况下设置上外边距会出现塌陷，解决方案：overflow：hidden；



##### 结构伪类选择器

*n:0,1,2,3,4……*

| 选择器                   | 说明                              |
| ------------------------ | --------------------------------- |
| E：first-child{}         | 匹配父元素中第一个(E)子元素       |
| E：last-child{}          | 匹配父元素中最后一个(E)子元素     |
| E：nth-child（n）{}      | 匹配父元素中第n个(E)子元素        |
| E：nth-last-child（n）{} | 匹配父元素中倒数第n(E)个子元素    |
| E：nth-of-type(n) {}     | 匹配父元素中第n个E样式的(E)子元素 |

##### 伪元素

由css模拟出的标签效果，默认生成行内元素

| 伪元素     | 作用                           |
| ---------- | ------------------------------ |
| ：：before | 在父元素内容最前添加一个伪元素 |
| ：：after  | 在父元素内容最后添加一个伪元素 |

#### 浮动

| float：left；  | 左浮动 |
| -------------- | ------ |
| float：right； | 右浮动 |

*浮动会脱离标准流，飞到空中，简称脱标；浮动元素可以设置宽高，一行显示多个*



##### 清除浮动

1.给父元素设置高度

2.在父元素内容的最后添加一个块级元素，并设置样式{ clear：both； }

3.单伪元素清除浮动

```
.clearfix::after {
	content: '.';
	display: block;
	clear:both;
	height:0;
	visibility:hidden;
}
```

4.双伪元素清除浮动/塌陷

```
.clearfix::before,
.clearfix::after {
	content: '';
	display: table;
}
.clearfix::after {
	clear:both;
}
```

5.给父元素设置 overflow： hidden；清除浮动/塌陷



#### 定位

| 相对定位                                 | 绝对定位                           | 固定定位                     |
| ---------------------------------------- | ---------------------------------- | ---------------------------- |
| position:relative                        | position:absolute                  | position:fixed               |
| 相对于自己的位置进行移动，原位置没有脱标 | 相对于有定位的父元素进行移动，脱标 | 只相对于浏览器进行定位，脱标 |

##### 子绝父相垂直居中

```
{ 
	position：absolute；

	left：50%；

	transform：translateX（-50%）;

}

```

##### 子绝父相垂直水平居中

```
{
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}
```

##### 更改定位元素的层级

*n越大，层级越高*	

```
z-index：n;
```

#### 装饰

##### 垂直对齐方式

*对块元素无效*

| 属性：属性值                | 效果           |
| --------------------------- | -------------- |
| vertical-align： baseline； | 默认，基线对齐 |
| vertical-align： top；      | 顶部对齐       |
| vertical-align： middle；   | 中部对齐       |
| vertical-align： bottom；   | 底部对齐       |

##### 光标类型cursor:

| 属性值  | 效果               |
| ------- | ------------------ |
| default | 默认，箭头         |
| pointer | 小手，提示可点击   |
| text    | 工字型，提示可打字 |
| move    | 十字，提示可移动   |

##### 边框圆角

*赋值规则：从左上角开始赋值，然后顺时针赋值，没有赋值的看对角*

```
border-radius：10px 10px 10px 10px ；
```

##### overflow溢出部分显示效果

| 属性值  | 效果                       |
| ------- | -------------------------- |
| visible | 默认值，溢出部分可见       |
| hidden  | 溢出部分隐藏               |
| scroll  | 不论是否溢出，皆显示滚动条 |
| auto    | 溢出时显示滚动条           |

##### 隐藏元素

| 属性：属性值         | 效果                 |
| -------------------- | -------------------- |
| visibility：hidden； | 隐藏元素本身，不脱标 |
| display：none；      | 隐藏元素本身，脱标   |
| display：block；     | 显示元素             |
| opacity：0~1；       | 设置元素整体透明度   |

##### 过渡

*属性全部过度，过渡时间10s*

```
transition： all 10s；
```

##### ico图标设置

```
<link rel="shortcut icon" href="ico图标的路径" type="image/x-icon" >
```

##### 版心

```
.container {

	width: 1240px;

	margin: 0 auto;

}

```

盒子透明：opacity:0.5;

表单提示文本修改样式：input::placeholder{}

display：flex 给父元素加，让子元素在一行显示，同时可以设置宽高，没有缝隙,子元素默认是父元素的高度

justify-content: space-between;平均分配父元素的剩余间隙

flex-wrap: wrap;子元素换行

align-content: space-between;竖着平均分

文字阴影：text-shadow：0px 0px 0px red；

盒子阴影：box-shadow：0px 0px 0px 0px red inset;






































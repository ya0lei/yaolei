



# 移动WEB

### 字体图标

1.*引入字体图标css文件*    2.*用类名调用*

```
<link rel="stylesheet" href="./iconfont/iconfont.css">
```

```
<span class="iconfont icon-xxx"></span>
```

### 2D平面转换

*transform的百分比取值是参照自身来取值的*

| 属性:属性值                                | 属性                      | 属性值                                           |
| ------------------------------------------ | ------------------------- | ------------------------------------------------ |
| transform: translate(x,y);                 | 位移                      | (100px,100px)/(50%,50%)                          |
| transform: translateX();                   | x轴移动                   | (px)/(n%)                                        |
| transform: rotate(100deg);                 | z轴旋转                   | 100度                                            |
| transform: rotateZ();                      | z轴旋转                   |                                                  |
| transform: rotateY();                      | y轴旋转                   |                                                  |
| transform: rotateX();                      | x轴旋转                   |                                                  |
| transform: rotate3d(1,1,1,100deg);         | 3d旋转,计算方式与分写不同 | (x,y,z,100deg),x,y,z取值0~1                      |
| transform: scale(x)/(x,y);                 | 缩放                      | 值取倍数or像素值,写单个值时,另外一个值等比例缩放 |
| transform-origin: 100px 100px/left bottom; | 旋转中心点                | 像素值/方位名词                                  |

#### 背景渐变

```
   background-image: linear-gradient(
                to right bottom,
                red,
                blue
            );
```

*让body和视口高度一致*:*给body设置背景渐变,不这样写会出现很炫酷的效果*

```
  html,body {
            height: 100%;
        }
```

### 3D空间转换

**透视**:*单个元素做3d效果,写在被观察元素的父元素上,取值一般为800~1200px,模拟眼睛到屏幕的距离*

z轴移动有效果啦!

```
perspective: 800px;
```

**开启3D**:多个元素做3D效果,加给父元素,

旋转能出3d效果啦!

```
transform-style: preserve-3d;
```

### 动画

**1.定义动画**

form/0%可省略不写,动画的样式不可以无中生有.

```
 @keyframes move {
            form {}
            to {}
        }
```

```
@keyframes move {
            0% {}
            100% {}
        }
```

**2.使用动画**

| 属性:属性值                                 | 属性             | 属性值                  |
| ------------------------------------------- | ---------------- | ----------------------- |
| animation-name: move;                       | 动画名称(自己起) | 不可数字,关键词开头     |
| animation-duration: 5s;                     | 动画时长         | 5秒                     |
| animation-delay: 5s;                        | 延迟时间         | 5秒                     |
| animation-fill-mode: backwards/forwards;    | 动画结束时的状态 | 第一帧/最后一帧         |
| animation-timing-function: steps(5)/linear; | 速度曲线         | 5步走完/匀速            |
| animation-iteration-count: 10/infinite;     | 播放次数         | 10次/无限               |
| animation-direction: alternate;             | 动画执行方向     | 反向                    |
| animation-play-state: paused;               |                  | 暂停动画,一般配合:hover |

一般使用**连写**,不分先后,前两个值必写

```
animation: move 5s steps(5) infinite forwards;
```

## Flex布局

**开启flex布局,给父元素设置**

```
display: flex;
```

```
flex:值; 值取整数,等分父元素的剩余空间,添加在子元素(自身)
```



####1.主轴对齐方式

| justify-content: | 值                        |
| ---------------- | ------------------------- |
| flex-start;      | 默认值,起点开始依次排列   |
| flex-end;        | 终点开始依次排列          |
| center;          | 沿轴居中对齐              |
| space-around;    | 子盒子主轴平分,间距:1,2,1 |
| space-between;   | 平分,间距:0,1,0           |
| space-evenly;    | 平分,间距:1,1,1           |

#### 2.侧轴对齐方式

| align-items: | 值                          |
| ------------ | --------------------------- |
| stretch;     | 默认值,高度拉伸至父元素高度 |
| flex-start;  | 默认值,起点开始依次排列     |
| flex-end;    | 终点开始依次排列            |
| center;      | 沿侧轴居中排列              |

**控制单个盒子的侧对齐**,添加在子元素上(自身)

```
align-self: ;
```

#### 3.改变主轴的方向

| flex-direction: | 值                |
| --------------- | ----------------- |
| row;            | 水平方向(默认值)  |
| column;         | 垂直方向          |
| row-reverse;    | 水平方向,从右到左 |
| column-reverse; | 垂直方向,从下到上 |

#### 4.多行盒子的对齐方式

**1.先要换行**

```
flex-wrap: wrap;
```

2.设置**行对齐方式**,取值与justify-content:类似

```
align-content: ;
```

## 移动适配

### rem,vw/vh

#### 1.rem

rem是一个相对单位.1rem=1html字号.rem配合**媒体查询**使用.

#### !媒体查询:



根据不同的视口宽度,设置不同的根字号,还可以设置各种样式.

```
  @media () {
            选择器 {
                css属性
            }
        }
```

**实例**:视口宽度375px的时候,html的字号为37.5px

```
 @media (width:375px) {
            html {
                font-size: 37.5px;
            }
        }
```

在rem布局中,1rem一般设置为视口宽度的1/10.

*使用rem要写很多的媒体查询,过于繁琐,一般直接引入**js**文件,写好px文件直接转换为rem即可*

#### 2.vw/vh

vw是一个相对单位,1vw=1/100视口宽度

vscold安装街舞封面的插件后,px转vw,直接:1.**fn+f1**  2.输入**px2vw**   3.回车

## 响应式布局

与**媒体查询**搭配使用,监听屏幕的宽度变化,让页面布局发生改变,设置不同的css样式.

####1.媒体查询在link标签中的使用

**1.max-width从大到小写 2.min-width从小到大写**

视口宽度为1200px时,引入css

```
<link rel="" href="" media="(min-width:1200px)"
```

### BootStrap

栅栏系统布局,将视口宽度分成12份.

**1.**引入bootstrap框架

**2**.class类名调用

xxx:取值1~12,代表盒子宽度,盒子有浮动.

| 类名             | 视口宽度为此值时出现效果 |
| ---------------- | ------------------------ |
| class=col-lg-xxx | =1200px,                 |
| class=col-md-xxx | >=992px                  |
| class=col-sm-xxx | >=768px                  |
| class=col-xs-xxx | <768px                   |

> 




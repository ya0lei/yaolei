#JS高级

# 代码实操

**设置**:可读可写 ,可增可改

| 代码                                                         | 作用                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **function Fn(){}**                                          | 创建构造函数                                                 |
| **var f= new Fn()**                                          | 创建实例对象                                                 |
| Fn.prototype.xxx=function(){}                                | 设置原型对象                                                 |
| f.____proto____.xxx=function(){}                             | 设置原型对象,非标准,别用                                     |
| Fn.prototype.constructor                                     | 指向构造函数                                                 |
| f.____proto____.constructor                                  | 指向构造函数                                                 |
| Fn.prototype={**constructor:Fn**}                            | 修改覆盖了原有的原型对象,黑体可以让原型中再打印构造函数      |
| **Fn.call( obj, a, b )**                                     | call()可以调用函数,obj:呼叫obj调用函数Fn;a:实参              |
| Fn.apply( obj, [a, b ])                                      | 让obj来调用函数,传的参数必须是数组,返回值是函数的返回值      |
| Fn.bind(obj,a,b)                                             | 让this指向obj,但不调用函数                                   |
| function Son(a,b){ **Father.call (this,a,b)** }              | 让Son继承Father的构造函数,此时this的指向为Son的this          |
| Son.prototype=Father.prototype                               | 让Son的原型=Father的原型,**弊**:修改Son的原型,Father的原型也会改变 |
| Son.prototype=new Father()                                   | 让Son的原型=Father的实例,Son查找方法时先在Father的属性里找,找不到指向Father的原型;**利**:修改Son的原型=给Father添加属性,不会更改Father的原型 |
| **arr.forEach(function( value, index, array ) {})**          | **遍历**数组,**value**:数组当前项,**index**:数组当前项的索引;**array**:数组本身 |
| arr**.filter**(function(value,index,array){return 条件})     | **遍历并筛选**数组,参数同上,返回值是所有满足条件值组成的新数组,搭配return使用,这里的return不会终止遍历 |
| arr**.some**(function(value,index,array){return 条件})       | **遍历并查找**数组,参数同上,返回值是布尔值,找到一个满足条件的就返回true |
| arr**.every**(function(value,index,array){})                 |                                                              |
| .trim()                                                      | 删除字符串两端的空格,放回值是一个新数组                      |
| Object.keys(obj)                                             | 返回对象obj所有属性组成的数组,属性是字符串格式               |
| Object.defineProperty(obj,prop,{ value:xxx;  writable:xxx;  enumerable:xxx;configurable:xxx}) | 设置属性,**obj**:目标对象;**prop**:属性名;   **{}**:属性的特性:(value:属性值;writable:值是否可重写;enumerable:属性是否可被枚举;configurable:属性是否可删改)  (xxx:默认false不可以) |
| -------------------------------------                        |                                                              |
| Array.prototype**.slice**.call(divs);                        | 有一个伪数组divs,调用数组的slice将其转为真数组               |
| [...divs]                                                    | 伪数组divs转真数组                                           |
| arguments                                                    | 获取实参组成的伪数组[a,b,c]                                  |
| **for (var k in obj){}**                                     | **循环对象**,k:每一项的属性名,obj:循环的对象                 |
| obj={...obj1}                                                | **浅拷贝**,复制obj1的所有属性,会覆盖obj原有的属性            |
| obj = JSON.parse(JSON.stringify(obj1))                       | **深拷贝**,序列化方法:将obj1转为字符再转为对象,对象里有函数,undefind,data对象用不了 |
| var rg=new RegExp(/123/)                                     | RegExp创建正则表达式                                         |
| var rg=/123/                                                 | 字面量创建正则表达式                                         |
| rg.test(123)                                                 | 检测数据是否符合正则规范                                     |
| .replace(/哈哈\|嘿嘿/g,'**')                                 | 替换字符串中所有的哈哈&嘿嘿,替换为**                         |

#### ES6语法

| 代码                                                         | 作用                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| let i=0                                                      | 声明变量,声明的变量具有块级作用域,有暂时性死区               |
| const i=0                                                    | 声明常量,具有块级作用域,声明常量必须赋值,赋值后值不能重新赋值 |
| let arr=[1,2,3]   let [a,b,c,d]=arr                          | 数组解构赋值:a=1,b=2,c=3,d=undefined                         |
| let o={name:'王',age=10}   let {name,age,sex}=o              | 对象解构赋值:name='王',age=10,sex=undefined                  |
| let o={name:'谢',age:10}  let{name:myname,age:myage}=o    console.log(myname,myage); | 对象结构赋值:myname='谢',myage=10                            |
| const fn=(形参)=>{}                                          | 箭头函数,fn()调用,this指向箭头函数定义位置的this             |
| const fn=形参=>log('哈哈')                                   | 形参,函数体只有一个时,可省略括号                             |
| const fn=(...a)=>{}                                          | **剩余参数**:...a会获取由实参组成的真数组                    |
| arr=[1,2,3]   ...arr=1,2,3                                   | **扩展运算符**,...可以将数组&对象转换成用逗号分隔的参数序列,log打印是1 2 3, |
| Array.from(伪数组)                                           | 将类数组或可遍历的对象转为真数组                             |
| Array.from(伪数组,(item)=> item)                             | 第二个参数可以写一个函数,函数的参数是伪数组每一项得值        |
| arr**.find**(item=>item.id==1)                               | 找出第一个符合条件的数组成员,找不到返回undefined             |
| arr**.findIndex**()                                          | 找出第一个符合条件的数组成员位置的索引,找不到返回-1          |
| arr.**includes**()                                           | 某个数组是否包含给定的值,返回布尔值                          |
| startsWith()                                                 | 表示参数字符串是否在原字符串的头部,返回布尔值                |
| endsWith()                                                   | 表示参数字符串是否在原字符串的尾部,返回布尔值                |
| 'x'.repeat(3)    'xxx'                                       | 将原字符串重复n次,返回一个新字符串                           |
|                                                              |                                                              |
|                                                              |                                                              |

Set数据结构

Set类似于数组,但是成员的值都是唯一的

```js
 const s = new Set();
 s.add(1).add(2).add(3); // 向 set 结构中添加值 
 s.delete(2)             // 删除 set 结构中的2值   
 s.has(1)                // 表示 set 结构中是否有1这个值 返回布尔值 
 s.clear()               // 清除 set 结构中的所有值
 //注意：删除的是元素的值，不是代表的索引
```



##### 正则字符表

| 量词  | 作用                                     |
| ----- | ---------------------------------------- |
| //    | /正则表达式/                             |
| *     | 出现>=0                                  |
| +     | 出现>=1                                  |
| ?     | 出现0\|\|1                               |
| {n}   | 出现n次                                  |
| {n,}  | 出现>=n                                  |
| {n,m} | 出现n到m次                               |
| \d    | 数值0至9,相当于[0-9]                     |
| \D    | 数值0至9以外的字符,相当于[ ^ 0-9 ]       |
| \w    | 所有字母,数字,下划线,相当于[A-Za-z0-9_ ] |
| \W    | \w以为的字符,相当于[ ^A-Za-z0-9_ ]       |
| \s    | 空格                                     |
| \S    | 非空格                                   |

| ^                            | 以谁开始                             |
| ---------------------------- | ------------------------------------ |
| $                            | 以谁结束                             |
| [abc]                        | a\|\|b\|\|c                          |
| [^abc]                       | [^]取反,不包含abc                    |
| .replace(/哈哈\|嘿嘿/g,'**') | 替换字符串中所有的哈哈&嘿嘿,替换为** |
|                              |                                      |

修饰符switch

| /123/[switch] | 写法:/123/g         |
| ------------- | ------------------- |
| g             | 全局匹配            |
| i             | 忽略大小写          |
| gi            | 全局匹配+忽略大小写 |



####创建类

类相当于构造函数,constructor=写属性的地方;constructor下面写方法=原型对象

注:

1.类名不可直接调用,用new生成实例自动调用



```js
class Fn{
	constructor(name,age){
        this.name=name;
        this.age=agr;       
    }
    hello(){
        
    }
}

var f=new Fn();
```

我又写个类,还想继承父类的属性方法,直接写:Son继承Fn的属性和方法,super调用Fn的构造函数&方法,必须写在第一行,

```js
class Son extends Fn{
	constructor(name,age){
        super(name,age)
    }
    hello(){
        super.hello()
    }
}

var s=new Son();
```

####浅拷贝

```js
    var obj = {
        sex: '男',
        age: 10,
    }
    var obj1 = {
        hobby: '篮球',
        sayhi: {
            weight: 150
        }
    }
    var obj2 = {
        height: 180
    }
    // 浅拷贝
    // 1.
    function deep() {
        // arguments是实参状态下的伪数组
        for (var i = 1; i < arguments.length; i++) {
            for (var k in arguments[i]) {
                arguments[0][k] = arguments[i][k]
            }
        }
        return arguments[0]
    }
    var res = deep(obj, obj1, obj2)
    console.log(res);
    res.sayhi.weight = 200;
    console.log(obj1.sayhi.weight);//200
    浅拷贝
    2：
   var obj = {

    }
    var obj1 = {
        hobby: '篮球',
        sayhi: {
            weight: 150
        }
    }
    obj = { ...obj1 }
    console.log(obj)
    3.js提供的
    Object.assign(o, obj);
```

#### 深拷贝

```js
 1.
  var obj1 = {
        hobby: '篮球',
        sayhi: {
            weight: 150
        }
    }
    var obj = JSON.parse(JSON.stringify(obj1))//  函数不可以
    obj.sayhi.weight = 200
    console.log(obj1.sayhi.weight);
2.
    var obj1 = {
        hobby: '篮球',
        sayhi: {
            weight: 150
        }
    }
    
    var newMy = { ...obj1, sayhi: { ...obj1.sayhi } }
    newMy.sayhi.weight = 200
    console.log(obj1.sayhi.weight);
3.   
var obj = {
        id: 1,
        name: 'andy',
        msg: {
            age: 18
        },
        color: ['pink', 'red']
    };
    var o = {

    };

    deepCopy(o, obj)
    // 封装函数 
    function deepCopy(newobj, oldobj) {
        for (var k in oldobj) {
            // 判断我们的属性值属于那种数据类型
            // 1. 获取属性值  oldobj[k]
            var item = oldobj[k];
            // 2. 判断这个值是否是数组
            if (item instanceof Array) {
                newobj[k] = [];
                deepCopy(newobj[k], item)
            } else if (item instanceof Object) {
                // 3. 判断这个值是否是对象
                newobj[k] = {};
                deepCopy(newobj[k], item)
            } else {
                // 4. 属于简单数据类型
                newobj[k] = item;
            }
        }
    }
```



# 构造函数&原型

###1.构造函数

js**创建对象**,在ES6之前,没有引入类(对象的模板)的概念,而是用一种名为构造函数的特殊函数来定义对象和他们的特征.

| 创建对象                                          | 方法             |
| ------------------------------------------------- | ---------------- |
| var obj=new Object()                              | new Object()创建 |
| var obj={}                                        | 字面量创建       |
| function Fn(){this.name=name;}    var f=new fn(); | **构造函数创建** |

**构造函数**:用来初始化对象,即为对象成员赋初始值,它总是与new一起使用.我

们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。

注意点:

1.构造函数用于创建某一类对象,首字母需大写

2.要和new一起使用才有意义

**new 在执行时会做四件事情：** 

① 在内存中创建一个新的空对象。 

② 让 this 指向这个新的对象。 

③ 执行构造函数里面的代码，给这个新对象添加属性和方法。 

④ 返回这个新对象（所以构造函数里面不需要 return ）。

**静态成员**：在构造函数本上添加的成员称为静态成员，只能由构造函数本身来访问

**实例成员**：在构造函数内部创建的对象成员称为实例成员，只能由实例化的对象来访问

```js
function Star(uname, age) {
 this.uname = uname;
 this.age = age;
 this.sing = function() {
 console.log('我会唱歌');
}}
var ldh = new Star('刘德华', 18);
var zxy = new Star('张学友', 19);
```

构造函数比较浪费内存,通过原型解决.

### 2.原型

原型:**prototype**,它是一个对象,作用是共享方法(函数).

```js
构造函数://
function Fn(){}
实例对象://
var f=new Fn();
```

| 代码         | 谁.      | 指向谁   |
| ------------ | -------- | -------- |
| Fn.prototype | 构造函数 | 原型对象 |
| f.__proto__  | 实例对象 | 原型对象 |
|              |          |          |


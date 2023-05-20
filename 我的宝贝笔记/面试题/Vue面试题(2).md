# Vue  面试题
## 1、Vue  的最大的优 势是什么？（必会）
Vue 作为一款轻量级框架、简单易学、
数据绑定、组件化、数据和结构的分离、虚拟 DOM、运行速度快，并且作者是中
国人尤雨溪，对应的 API 文档对国内开发者优化，作为前端开发人员的首选入门
框架，Vue 有很多优势：
- Vue.js 可以进行组件化开发，使代码编写量大大减少，读者更加易于理解。
- Vue.js 最突出的优势在于可以对数据进行双向绑定。
相比传统的页面通过超链接实现页面的切换和跳转，Vue 使用路由不会刷新页
面。
- Vue 是单页面应用，使页面局部刷新，不用每次跳转页面都要请求所有数据和 dom，这样大大加快了访问速度和提升用户体验而且他的第三方 UI 组件库使用起来节省很多开发时间，从而提升开发效率。

## 2、Vue 和 jQuery  两者之间的区别是什么？
- 1、jQuery 介绍：曾经也是现在依然最流行的 web 前端 js 库，可是现在无论
是国内还是国外他的使用率正在渐渐被其他的 js 库所代替，随着浏览器厂商对
HTML5 规范统一遵循以及 ECMA6 在浏览器端的实现，jQuery 的使用率将会越来越
低
- 2、Vue 介绍：Vue 是一个兴起的前端 js 库，是一个精简的 MVVM。从技术角度
讲，Vue.js 专注于 MVVM 模型的 ViewModel 层。它通过双向数据绑定把 View
层和 Model 层连接了起来，通过对数据的操作就可以完成对页面视图的渲染。
当然还有很多其他的 mvmm 框架如 Angular，React 都是大同小异，本质上都是基
于 MVVM 的理念。 然而 Vue 以他独特的优势简单，快速，组合，紧凑，强大而迅
速崛起
- 3、Vue 和 jQuery 对比 
  1. jQuery 是使用选择器选取 DOM 对象，对其进行赋值、取值、事件绑定等操作，其实和原生的 HTML 的区别只在于可以更方便的选取和操作 DOM 对象，而数据和界面是在一起的。
    > 比如需要获取 label 标签的内容选取 DOM 对象，对其进行赋值、取值、事件绑定等操作，其实和原生的 HTML的区别只在于可以更方便的选取和操作 DOM 对象，而数据和界面是在一起的。比如需要获取 label 标签的内容：(“lable”).val();,它还是依赖 DOM 元素的值。


  2. Vue 则是通过 Vue 对象将数据和 View 完全分离开来了。对数据进行操作不再需要引用相应的 DOM 对象，可以说数据和 View 是分离的，他们通过 Vue 对象这个vm 实现相互的绑定。这就是传说中的 MVVM。


## 3、 mvvm 和 mvc  区别是什么？哪些场景适合？（必会）
1. **MVVM  基本定义**
   MVVM 即 Model-View-ViewModel 的简写。即模型-视图-视图模型。模型（Model）指的是后端传递的数据。视图(View)指的是所看到的页面。
   视图模型(ViewModel)是 mvvm 模式的核心，它是连接 view 和 model 的桥梁。它有两个方向：
   - 一是将模型（Model）转化成视图(View)，即将后端传递的数据转化成看到的页面。实现的方式是：数据绑定。
   - 二是将视图(View)转化成模型(Model)，即将所看到的页面转化成后端的数据实现的方式是：DOM 事件监听。这两个方向都实现的，我们称之为数据的双向绑定。
2. **MVC  基本定义**
MVC 是 Model-View- Controller 的简写。即模型-视图-控制器。
M 和 V指的意思和 MVVM 中的 M 和 V 意思一样。C 即 Controller 指的是页面业务逻辑。
使用 MVC 的目的就是将 M 和 V 的代码分离。MVC 是单向通信。也就是 View 跟Model，必须通过 Controller 来承上启下。
MVC 和 MVVM 的区别并不是 VM 完全取代了C，只是在MVC的基础上增加了一层VM，只不过是弱化了C的概念，ViewModel存在目的在于抽离 Controller 中展示的业务逻辑，而不是替代 Controller，其它视图操作业务等还是应该放在 Controller 中实现。也就是说 MVVM 实现的是业务逻辑组件的重用，使开发更高效，结构更清晰，增加代码的复用性。
3. 使用场景
MVC 和 MVVM 其实区别并不大。都是一种设计思想。主要就是 MVC 中Controller 演变成 MVVM 中的 viewModel，MVVM 主要解决了 MVC 中大量的 DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。
**区别：** Vue 数据驱动，通过数据来显示视图层而不是节点操作。 
**场景：** 数据操作比较多的场景，需要大量操作 DOM 元素时，采用 MVVM 的开发方式，会更加便捷，让开发者更多的精力放在数据的变化上，解放繁琐的操作 DOM 元素。
## 4、Vue  数据双向绑定的原理是什么? ? （必会）
Vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过`Object.defineProperty()` 来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
**第一步** ：需要 observe 的数据对象进行递归遍历，包括子属性对象的属
性，都加上 setter 和 getter这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化
**第二步** ：compile 解析模板指令，将模板中的变量替换成数据，然后初始化
渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图
**第三步** ：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情是:
1. 在自身实例化时往属性订阅器(dep)里面添加自己
2. 自身必须有一个 update()方法
3. 待属性变动 dep.notice()通知时，能调用自身的 update()方法，并触发
Compile 中绑定的回调，则功成身退。

**第四步** ：MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模
板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据 model 变更的双向绑定效果。
## 5、Object.defineProperty 和 和 Proxy  的区别（必会）
1. Proxy  的优势如下: :
Proxy 可以直接监听对象而非属性；
Proxy 可以直接监听数组的变化；
Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；
Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而Object.defineProperty 只能遍历对象属性直接修改；
Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的
新标准的性能红利；
2. Object.defineProperty  的优势如下: :
兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用polyfill 磨平
## 6、Vue  生命周期总共分为几个阶段？（必会）
Vue 实例从创建到销毁的过程，就是生命周期。也就是从开始创建、初始化
数据、编译模板、挂载 Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。
1. beforeCreate
在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配
置之前被调用。
2. created
在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观
测 (data observer)， 属性和方法的运算，watch/event 事件回调。然而，挂
载阶段还没开始，$el 属性目前不可见。
3. beforeMount
在挂载开始之前被调用：相关的 render 函数首次被调用。
4. mounted
el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果
root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
5. beforeUpd ate
数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问
现有的 DOM，比如手动移除已添加的事件监听器。该钩子在服务器端渲染期间不
被调用，因为只有初次渲染会在服务端进行。
6. updated
由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
7. activated
keep-alive 组件激活时调用。该钩子在服务器端渲染期间不被调用。
8. deactivated
keep-alive 组件停用时调用。该钩子在服务器端渲染期间不被调用。
9. before Destroy
实例销毁之前调用。在这一步，实例仍然完全可用。该钩子在服务器端渲染
期间不被调用。
10. destroyed
Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有
的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间
不被调用。
11. errorCaptured （ 2.5.0+  新增）
当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对
象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回
false 以阻止该错误继续向上传播。

## 7、第一次加载页面会触发哪几个钩子函数？（必会）
当页面第一次页面加载时会触发 beforeCreate, created, beforeMount,
mounted 这几个钩子函数
## 8、请说下封装  Vue  组件的过程？（必会）
首先，组件可以提升整个项目的开发效率。能够把页面抽象成多个相对独立
的模块，解决了我们传统项目开发：效率低、难维护、复用性等问题。
1. 分析需求：确定业务需求，把页面中可以服用的结构，样式以及功能，单独
抽离成一个文件，实现复用
2. 具体步骤：
   1. 使用 Vue.component 方法注册组件，子组件需要数据，可以在 props 中接受定义，而子组件修改好数据后，想把数据传递给父组件。可以采用$emit 方法向外抛数据
   2. 如果需要给组件传入模板，则定义为插槽 slot
   3. 如果需要 父组件主动调用子组件的方法 可以在 methods 选项中开放方法
## 9、Vue  组件如何进行传值的 ?  （必会）
1. 父组件向子组件传递数据
父组件内设置要传的数据，在父组件中引用的子组件上绑定一个自定义属
性并把数据绑定在自定义属性上，在子组件添加参数 props 接收即可
2. 子组件向父组件传递数据
子组件通过 Vue 实例方法$emit 进行触发并且可以携带参数，父组件监听使用@（ v-on）进行监听，然后进行方法处理
3. 非父子组件之间传递数据
- 1、引入第三方 new Vue 定义为 eventBus
- 2、在组件中 created 中订阅方法 `eventBus.$on("自定义事件名",methods
中的方法名)`
- 3、在另一个兄弟组件中的 methods 中写函数，在函数中发布 eventBus 订
阅的方法 `eventBus.$emit("自定义事件名”)`
- 4、在组件的 template 中绑定事件(比如 click)
## 10、组件中写  name  选项有什么作用？（必会）
1. 项目使用 keep-alive 时，可搭配组件 name 进行缓存过滤
2. DOM 做递归组件时需要调用自身 name
3. Vue-devtools 调试工具里显示的组见名称是由 Vue 中组件 name 决定的

## 11、Vue 件 组件  data  为什么必须是函数（必会）
1、每个组件都是 Vue 的实例。
2、组件共享 data 属性，当 data 的值是同一个引用类型的值时，改变
其中一个会影响其他
3、组件中的 data 写成一个函数，数据以函数返回值形式定义，这样每复用
一次组件，就会返回一份新的 data，类似于给每个组件实例创建一个私
有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，
就使得所有组件实例共用了一份 data，就会造成一个变了全都会变的结
果。
## 12、讲一下组件的命名规范（必会）
给组件命名有两种方式，一种是使用链式命名 my-component，一种是使用大
驼峰命名 MyComponent，
在 字 符 串 模 板 中`<MyComponent></MyComponent>`都可以使用，
`<my-component></my-component> `和在非字符串模板中最好使用`<MyComponent></MyComponent>`，因为要遵循 W3C 规范中的自定义组件名 (字母全小写且必须包含一个连字符)，避免和当前以及未来的 HTML 元素相冲突
## 13、怎么在组件中监听路由参数的变化？ （必会）
有两种方法可以监听路由参数的变化，但是只能用在包含`<router-view />`的组件内。
**第一种**
```
watch: {
    '$route'(to, from) {
    // 在此处监听
    },
},
```

**第二种**
```
beforeRouteUpdate (to, from, next) {
//这里监听
},
```
## 14、怎么捕获 Vue 组件的错误信息？（必会）
errorCaptured 是组件内部钩子，当捕获一个来自子孙组件的错误时被调用，
接收 error、vm、info 三个参数，return false 后可以阻止错误继续向上抛出。
errorHandler 为全局钩子，使用 Vue.config.errorHandler 配置，接收参
数与 errorCaptured 一致，2.6 后可捕捉 v-on 与 promise 链的错误，可用于统
一错误处理与错误兜底。
## 15、Vue  组件里的定时器要怎么销毁？（必会）
如果页面上有很多定时器，可以在 data 选项中创建一个对象 timer，给每个定时器取个名字一一映射在对象 timer 中， 在 beforeDestroy 构造函数中
```
for(let k in this.timer){clearInterval(k)}；
如果页面只有单个定时器，可以这么做。
const timer = setInterval(() =>{}, 500);
this.$once('hook:beforeDestroy', () => {
clearInterval(timer);
})
```
## 16、Vue.cli  中怎样使用自定义的组件？有遇到过哪些问题吗？（必会）
**第一步**：在 components 目录新建你的组件文件（indexPage.Vue），script
一定要 export default {}
**第二步**：在需要用的页面（组件）中导入：`import indexPage from '@/components/indexPage.Vue'`
**第三步** ： 注 入 components:{indexPage} Vue 的 子 组 件 的components属 性 上
**第四步**：在 template 视图 view 中使用，例如有 indexPage 命名，使用的时候则 index-page
## 17、Vue 中 solt 的使用方式，以及 solt 作用域插槽的用法（必会）
使用方式：当组件当做标签进行使用的时候，用 slot 可以用来接受组件标
签包裹的内容，当给 solt 标签添加 name 属性的 时候，可以调换响应的位置
插槽作用域： 作用域插槽其实就是带数据的插槽，父组件接收来自子组件
的 slot 标签上通过 v-bind 绑定进而传递过来的数 据，父组件通过 scope 来进行接受子组件传递过来的数据
## 18、Vue  该如何实现组件缓存? ? （必会）
在面向组件化开发中，我们会把整个项目拆分为很多业务组件，然后按照合
理的方式组织起来，那么自然会存在组件之前切换的问题，Vue 中有个动态组件
的概念，它能够帮助开发者更好的实现组件之间的切换，但是在面对需求频繁的
变化，去要切换组件时，动态组件在切换的过程中，组件的实例都是重新创建的，
而我们需要保留组件的状态，为了解决这个问题，需要使用到 Vue 中内置组件`<keep-alive>`,
`<keep-alive></keep-alive>` 包裹动态组件时，会缓存不活动的组件实例,
主要用于保留组件状态或避免重新渲染，
简答的说: 比如有一个列表和一个详情，那么用户就会经常执行打开详情=>
返回列表=>打开详情…这样的话列表和详情都是一个频率很高的页面，那么就可
以对列表组件使用`<keep-alive></keep-alive>`进行缓存，这样用户每次返回列表的时候，都能从缓存中快速渲染，而不是重新渲染

## 19、跟  keep-alive  有关的生命周期是哪些？ （必会）
**前言**：在开发 Vue 项目的时候，大部分组件是没必要多次渲染的，所以
Vue 提供了一个内置组件 keep-alive 来缓存组件内部状态，避免重新渲染，在
开发 Vue 项目的时候，大部分组件是没必要多次渲染的，所以 Vue 提供了一个内
置组件 keep-alive 来缓存组件内部状态，避免重新渲染
**生命周期函数**：在被 keep-alive 包含的组件/路由中，会多出两个生命周期的钩子:`activated` 与 `deactivated`。
1. activated  钩子：在在组件第一次渲染时会被调用，之后在每次缓存
组件被激活时调用。Activated ： 钩子调用时机： 第一次进入缓存路由/组件，在 mounted后面，beforeRouteEnter 守卫传给 next 的回调函数之前调用，并且给因为组件被缓存了，再次进入缓存路由、组件时，不会触发这些钩子函数，beforeCreate created beforeMount mounted 都不会触发
2. deactivated  钩子：组件被停用（离开路由）时调用。deactivated  钩 子 调 用 时 机 ： 使 用 keep-alive 就 不 会 调 用beforeDestroy(组件销毁前钩子)和 destroyed(组件销毁)，因为组件没被销毁，被缓存起来了，这个钩子可以看作 beforeDestroy 的替代，如果你缓存了组件，要在组件销毁的的时候做一些事情，可以放在这个钩子里，组件内的离开当前路由钩子 beforeRouteLeave => 路由前置守卫 beforeEach =>全局后置钩子afterEach => deactivated 离开缓存组件 => activated 进入缓存组件(如果你进入的也是缓存路由)
## 20、Vue  常用的修饰符都有哪些？（必会）
- .prevent: 提交事件不再重载页面；
- .stop: 阻止单击事件冒泡；
- .self: 当事件发生在该元素本身而不是子元素的时候会触发；
- .capture: 事件侦听，事件发生的时候会调用
## 21、Vue  常用的指令都有哪些？并且说明其作用（必会）
```
1、 v-model 多用于表单元素实现双向数据绑定（同 angular 中的 ng-model）
2、 v-for 格式： v-for="字段名 in(of) 数组 json" 循环数组或 json(同 angular 中的 ng-
repeat),需要注意从 Vue2 开始取消了$index
3、 v-show 显示内容 （同 angular 中的 ng-show）
4、 v-hide 隐藏内容（同 angular 中的 ng-hide）
5、 v-if 显示与隐藏 （dom 元素的删除添加 同 angular 中的 ng-if 默认值为 false）
6、 v-else-if 必须和 v-if 连用
7、 v-else 必须和 v-if 连用 不能单独使用 否则报错 模板编译错误
8、 v-bind 动态绑定 作用： 及时对页面的数据进行更改
9、 v-on:click 给标签绑定函数，可以缩写为@，例如绑定一个点击函数 函数必须写在 methods
里面
10、v-text 解析文本
11、v-html 解析 html 标签
12、v-bind:class 三种绑定方法 1、对象型 '{red:isred}' 2、三元型 'isred?"red":"blue"'3、数组型 '[{red:"isred"},{blue:"isblue"}]'
13、v-once 进入页面时 只渲染一次 不在进行渲染
14、v-cloak 防止闪烁
15、v-pre 把标签内部的元素原位输出
```


## 22、自定义指令 (v-check、 、v-focus) 的方法有哪些? ? 它有哪些钩子函数? ? 还有哪些钩子函数参数? ? （必会）
**全局定义指令**：在 Vue 对象的 directive 方法里面有两个参数，一个是指令
名称，另外一个是函数。
**组件内定义指令**：directives钩子函数：bind(绑定事件触发)、inserted(节点插入的时候触发)、update(组件内相关更新)
**钩子函数参数**：el、binding
## 24 、v-show 和 和 v-if  指令的共同点和不同点? ? （必会）
1. 相同点：
v-show 和 v-if 都能控制元素的显示和隐藏。
2. 不同点：
实现本质方法不同
v-show 本质就是通过设置 css 中的 display 设置为 none，控制隐藏
v-if 是动态的向 DOM 树内添加或者删除 DOM 元素
3. 编译的区别
v-show 其实就是在控制 css
v-if 切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部
的事件监听和子组件
4. 编译的条件
v-show 都会编译，初始值为 false，只是将 display 设为 none，但它也编译了
v-if 初始值为 false，就不会编译了
5. 性能比较
v-show 只编译一次，后面其实就是控制 css，而 v-if 不停的销毁和创建，故v-show 性能更好一点。注意点：因为v-show实际是操作display:" "或者none，当css本身有display：none 时，v-show无法让其显示
6. 总结（适用场景）：如果要频繁切换某节点时，使用 v-show（无论 true 或者 false，初始都会进行渲染，此后通过 css 来控制显示隐藏，因此切换开销比较小，初始开销较大），如果不需要频繁切换某节点时，使用 v-if （因为懒加载，初始为 false 时，不会渲染，但是因为它是通过添加和删除 dom 元素来控制显示和隐藏的，因此初始渲染开销较小，切换开销比较大）
## 25、为什么避免 v - if 和 和 v - for  用在一起（必会）
当 Vue 处理指令时，v-for 比 v-if 具有更高的优先级，通过 v-if 移动到容器元素，不会再重复遍历列表中的每个值。
取而代之的是，我们只检查它一次，且不会在 v-if 为否的时候运算 v-for。
## 26、 watch 、 methods 和 和  computed  的区别? ? （必会）
- **基本说明**
  1. computed：
  计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this
  上下文自动地绑定为 Vue 实例。
  2. methods：
  methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方
  法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例。
  3. watch：
  观察和响应 Vue 实例上的数据变动，一个对象，键是需要观察的表达
  式，值是对应回调函数。值也可以是方法名，或者包含选项的对象，Vue 实例将
  会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。
- **三者的加载顺序**
  1. computed 是在 HTML DOM 加载后马上执行的，如赋值；（属性将被混入到Vue 实例）
  2. methods 则必须要有一定的触发条件才能执行，如点击事件
  3. watch 它用于观察 Vue 实例上的数据变动。
  - 默认加载的时候先 computed 再 watch，不执行 methods；
  - 触发某一事件后,先 computed 再 methods 再到 watch
- **computed 属性 vs method 方法**
  computed 计算属性是基于它们的依赖进行缓存的。
- **总结**
计算属性 **computed** 只有在它的相关依赖发生改变时才会重新求值，当有一个性能开销比较大的的计算属性 A ，它需要遍历一个极大的数组和做大量的计算，然后我们可能有其他的计算属性依赖于 A ，这时候，我们就需要缓存，每次确实需要重新加载，不需要缓存时用methods
## 27、怎么在  watch  监听开始之后立即被调用？（必会）
在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调。
## 28、 watch  怎么深度监听对象变化？（必会）
```
<input type="text" v-model="cityName"/>
  new Vue({
      el: '#root',
      data: {
        cityName: 'shanghai'
      },
      watch: {
        cityName(newName, oldName) {  // ...  }
      }
  })
```
直接写一个监听处理函数，当每次监听到 cityName 值发生改变时，执行函数。也可以在所监听的数据后面直接加字符串形式的方法名：
```
watch: {
  cityName: 'nameChange'
}
```

## 29 、computed 中的属性名和 data 中的属性名可以相同吗？（必会）
不能同名，因为不管是 computed 属性名还是 data 数据名还是 props 数据名都会被挂载在 vm 实例上，因此这三个都不能同名。
```
if (key in vm.$data) {
  warn(`The computed property "${key}" is already defined in data.`, vm)
} else if (vm.$options.props && key in vm.$options.props) {
  warn(`The computed property "${key}" is already defined as a prop.`, vm)
}
```
## 30 、什么是 Vue 的计算属性（必会）
在模板中放入太多的逻辑会让模板过重且难以维护，在需要对数据进行复杂处理，且可能多次使用的情况下，尽量采取计算属性的方式，好处：使得数据处
理结构清晰；
- 1、 依赖于数据，数据更新，处理结果自动更新；
- 2、 计算属性内部 this 指向 vm 实例；
- 3、 在 template 调用时，直接写计算属性名即可；
- 4、 常用的是 getter 方法，获取数据，也可以使用 set 方法改变数据；
- 5、 相较于 methods，不管依赖的数据变不变，methods 都会重新计算，但是依赖
数据不变的时候 computed 从缓存中获取，不会重新计算。
## 31 、Vue 中 key 值的作用是什么？（必会）
当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素.
key 的作用主要是为了高效的更新虚拟 DOM。
## 32 、 Vue-loader 是什么？使用它的用途有哪些？（必会）
Vue-loader 会解析文件，提取出每个语言块，如果有必要会通过其他 loader处理，最后将他们组装成一个 commonjs 模块；module.exports 出一个 Vue.js 组件对象
1.  **< temlate> 语言块**
（1）默认语言：html
（2）每个.Vue 文件最多包含一个< template>块
（3）内容将被提取为字符串，将编译用作 Vue 组件的 template 选项；
2. **< script>**
（1）默认语言：JS（在监测到 babel-loader 或者 bable-loader 配置时，自动支持 ES2015）
（2）每个.Vue 文件最多包含一个< script>块
（3）该脚本在类 CommonJS 环境中执行（就像通过 webpack 打包的正常 JS 模块）。所以你可以 require()其他依赖。在 ES2015 支持下，也可以使用 import 跟 export 语法
（4）脚本必须导出 Vue.js 组件对象，也可以导出由 Vue.extend()创建的扩展对象；但是普通对象是更好的选择；
3. **< style>**
默认语言：css
1、一个.Vue 文件可以包含多个< style>标签
2、这个标签可以有 scoped 或者 module 属性来帮助你讲样式封装到当前组
件；具有不同封装模式的多个< style>标签可以在同一个组件中混合使用
3、默认情况下，可以使用 style-loader 提取内容，并且通过< style>标签动态假如文档的< head>中，也可以配置 webpack 将所有的 styles 提取到单个CSS 文件中；
4. **自定义块**
可以在.Vue 文件中添加额外的自定义块来实现项目的特殊需求；
例如< docs>块；Vue-loader 将会使用标签名来查找对应的 webpack loaders 来应用到对应的模块上；webpack 需要在 Vue-loader 的选项 loaders 中指定；Vue-loader 支持使用非默认语言，比如 CSS 预处理器，预编译的 HTML 模板语言，通过设置语言块的 lang 属性：
```
  <style lang='sass'>
    /*sass*/
  </style>
```
## 33 、 Vue  中怎么自定义过滤器（必会）
Vue.js 允许自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：双花括号插值和 v-bind 表达式。过滤器应该被添加在 JavaScript表达式的尾部，由“管道”符号指示可以用全局方法 Vue.filter() 注册一个自定义过滤器，它接收两个参数：
过滤器 ID 和过滤器函数。过滤器函数以值为参数，返回转换后的值
```
Vue.filter(  'reverse'  ,  function  (value)  {  return
value.split( '' ).reverse().join( '' ) })

<span v-text = "message | reverse"></span>
```
过滤器也同样接受全局注册和局部注册。
## 34 、你是怎么认识 Vuex  的? ? （必会）
Vuex 可以理解为一种开发模式或框架。比如 PHP 有 thinkphp，java 有 spring等，通过状态(数据源)集中管理驱动组件的变化(好比 spring 的 IOC 容器对 bean进行集中管理)。
- 1、 应用级的状态集中放在 store 中;
- 2、 改变状态的方式是提交 mutations，这里必须是同步的;
- 3、 异步逻辑应该封装在 action 中。
## 35 、Vuex 的 5 个核心属性是什么? ? （必会）
分别是  State、Getter、Mutation、Action、Module
1. state
state 为单一状态树，在 state 中需要定义我们所需要管理的数组、对象、字符串等等，只有在这里定义了，在 Vue.js 的组件中才能获取你定义的这个对象的状态。
2. getter
getter 有点类似 Vue.js 的计算属性，当我们需要从 store 的 state中派生出一些状态，那么我们就需要使用 getter，getter 会接收 state 作为第一个参数，而且 getter 的返回值会根据它的依赖被缓存起来，只有 getter 中的依赖值（state 中的某个需要派生状态的值）发生改变的时候才会被重新计算。
3. mutation
更改 store 中 state 状态的唯一方法就是提交 mutation，就很类似事件。每个 mutation 都有一个字符串类型的事件类型和一个回调函数，我们需要改变 state 的值就要在回调函数中改变。我们要执行这个回调函数，那么我们需要执行一个相应的调用方法：store.commit。
4. action
action 可以提交 mutation，在 action 中可以执行 store.commit，而且 action 中可以有任何的异步操作。在页面中如果我们要嗲用这个 action，则需要执行 store.dispatch
5. module
module 其实只是解决了当 state 中很复杂臃肿的时候，module 可
以将 store 分割成模块，每个模块中拥有自己的 state、mutation、action 和 getter
## 36 、Vuex  的出现解决了什么问题? ? （必会）
**主要解决了以下两个问题**:
- 1, 多个组件依赖于同一状态时，对于多层嵌套的组件的传参将会非常繁琐，
并且对于兄弟组件间的状态传递无能为力。
- 2, 来自不同组件的行为需要变更同一状态。以往采用父子组件直接引用或
者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导
致无法维护的代码。
## 37、简述 Vuex 的数据传递流程（必会）
当组件进行数据修改的时候我们需要调用 dispatch 来触发 actions 里面的方法。actions 里面的每个方法中都会 有一个 commit 方法，当方法执行的时候会通过 commit 来触发 mutations 里面的方法进行数据的修改。 mutations 里面的每个函数都会有一个 state 参数，这样就可以在 mutations 里面进行 state 的数据修改 ，当数据修改完毕后，会传导给页面。页面的数据也会发生改变
## 38 、Vuex 的 Mutation 和 和 Action  之间的区别是什么？（必会）
1. 流程顺序
“相应视图—>修改 State”拆分成两部分，视图触发 Action，Action 再触发
Mutation。
2. 角色定位
基于流程顺序，二者扮演不同的角色。
Mutation：专注于修改 State，理论上是修改 State 的唯一途径。
Action：业务代码、异步请求。
3. 限制
角色不同，二者有不同的限制。
Mutation：必须同步执行。
Action：可以异步，但不能直接操作 State。
## 39 、 Vue-Router  是干什么的，原理是什么？（必会）
- Vue-Router 是 Vue.js 官方的路由插件，它和 Vue.js 是深度集成的，适合用于构建单页面应用。
- Vue 的单页面应用是基于路由和组件的，路由用于设定访问路径，并将路径和组件映射起来。传统的页面应用，是用一些超链接来实现页面切换和跳转的。
- 在 Vue-Router 单页面应用中，则是路径之间的切换，也就是组件的切换。路由模块的本质 就是建立起 url 和页面之间的映射关系。
- **更新视图但不重新请求页面**是前端路由原理的核心之一，目前在浏览器环境中这一功能的实现主要有两种方式：
  1. 利用 URL 中的 hash（“#”）
  2. 利用 History interface 在 HTML5 中新增的方法

## 40 、路由之间是怎么跳转的？有哪些方式？ （必会）
1、`<router-link to="需要跳转到页面的路径">`
2、`this.$router.push()`跳转到指定的 url，并在 history 中添加记录，点击回退返回到上一个页面
3、`this.$router.replace()`跳转到指定的 url，但是 history 中不会添加记录，
点击回退到上上个页面
4、`this.$touter.go(n)`向前或者后跳转 n 个页面，n 可以是正数也可以是负数
## 41 、 Vue-Router  怎么配置路由（必会）
在 Vue 中配置路由分为 5 个步骤，分别是：
**1, 安装**
```
npm install --save Vue-Router
```
**2, 引用**
```
import VueRouter from 'Vue-Router'
```

**3, 配置路由文件**
```
var router = new VueRouter({
  routes:[
    {
      path:"/hello",
      component:HelloWorld
    },
    {
      path:"/wen",
      component:HelloWen
    }
  ]
}）
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
```
**4, 视图加载的位置**
默认 App.Vue 文件中加`<router-view></router-view>`

**5，跳转导航**
```
<router-link to="/hello">helloword</router-link>（渲染出来的是 a 标签）
```
## 42 、 Vue-Router  有哪几种路由守卫? ? （必会）
路由守卫为：
  - 全局守卫：beforeEach
  - 后置守卫：afterEach
  - 全局解析守卫：beforeResolve
  - 路由独享守卫：beforeEnter
## 43 、 Vue-Router  的钩子函数都有哪些? ? （必会）
关于 Vue-Router 中的钩子函数主要分为 3 类
1. 全局钩子函数要包含  beforeEach, beforeEach 函数有三个参数,分别是:
  - to:router 即将进入的路由对象
  - from:当前导航即将离开的路由
  - next:function,进行管道中的一个钩子，如果执行完了,则导航
的状态就是 confirmed （确认的）否则为 false,终止导航。
2. 单独路由独享组件
beforeEnter
3. 组件内钩子
beforeRouterEnter，
beforeRouterUpdate,
beforeRouterLeave
## 44、路由传值的方式有哪几种(必会)
Vue-Router 传参可以分为两大类，分别是编程式的导航 router.push 和声明式的导航
1. **router.push**
  - 字符串：直接传递路由地址，但是不能传递参数
`this.$router.push("home")`
  - 对象：
命名路由 这种方式传递参数，目标页面刷新会报错
  - 查询参数 query 和 name 配对的是
`this.$router.push({name:"news",params:{userId:123})`
  - params，和 path 配对的是
`this.$router.push({path:"/news',query:{uersId:123})`
  - 接收参数
`this.$route.query`
2. **声明式导航**
- 字符串
`<router-link to:"news"></router-link>`
- 命 名 路 由
`<router-link :to:"{name:'news',params:{userid:1111}}"></route-link>`
- 查 询 参 数
`<router-link :to="{path:'/news',query:{userId:1111}}"></router-link>`

## 45 、怎么定义  Vue-Router 的动态路由? ? 怎么获取传过来的动态参数? ?
我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。
例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 Vue-Router 的路由路径中使用`“动态路径参数”(dynamicsegment)` 来达到这个效果。
动态路径参数，使用“冒号”开头，一个路径参数，使用冒号标记，当匹配
到一个路由时，参数会被设置到 `this.$router.params` 中，并且可以在每个组件中使用。
现在我们知道了可以通过动态路由传参，在路由中设置了，多段路径参数后，对应的值分别都会设置到`$router.query` 和`$router.params` 中
## 46 、query 和 params  之间的区别是什么？（必会）
- 1、query 要用 path 来引入，params 要用 name 来引入
- 2、接 收 参 数 时 ， 分 别 是 `this.$route.query.name`
和 `this.$route.params.name`（注意：是`$route` 而不是`$router`）
## 47 、`$route`  和 `$router`  的区别是什么？（ 必会）
- `$route` 是“路由信息对象”，包括 path，params，hash，query，fullPath，matched，name 等路由信息参数。
- `$router` 为 VueRouter 的实例，相当于一个全局的路由器对象，里面含有很多属性和子对象，例 如 history 对象， 经常用的跳转链接就可以用 `this.$router.push` 会往 history 栈中添加一个新的记录。返回上一个 history 也是使用`$router.go` 方法
## 48 、active-class  属于哪个组件中的属性？该如何使用？
首先 active-class 是 Vue-Router 模块中 router-link 组件中的属性，主要作用是用来实现选中样式的切换，在 Vue-Router 中要使用 active-class 有两种方式：

1. 在  router-link  中写入  active-class
active-class 选择样式时根据路由中的路径（to=“/home”）去匹配，然后显示
```
  <router-link to="/home" class="menu-home" active-class="active">首页
  </router-link>
```
2. 直接在路由 js 文件中配置  linkActiveClass
```
export default new Router({
linkActiveClass: 'active',
})

<div class="menu-btn">
  <router-link to="/" class="menu-home" active-class="active">
    首页
  </router-link>
</div>
<div class="menu-btn">
  <router-link to="/my" class="menu-my" active-class="active">
    我的
  </router-link>
</div>
```

## 49、 Vue的路由实现模式：hash模式和history模式 （必会）
1. hash 模式：在浏览器中符号“#”，#以及#后面的字符称之为 hash，
用 window.location.hash读取。
特点：hash 虽然在 URL 中，但不被包括在HTTP 请求中；用来指导浏览器动作，对服务端安全无用，hash 不会重加载页面
2. history 模式：history 采用 HTML5 的新特性；且提供了两个新方法： pushState()， replaceState()可以对浏览器历史记录栈进行修改，以及 popState 事件的监听到状态变更
## 50、请说出路由配置项常用的属性及作用（必会）
路由配置参数：
  - path : 跳转路径
  - component : 路径相对于的组件
  - name:命名路由
  - children:子路由的配置参数(路由嵌套)
  - props:路由解耦
  - redirect : 重定向路由
## 51、编程式导航使用的方法以及常用的方法（必会）
路由跳转: `this.$router.push()`
路由替换: `this.$router.replace()`
后退: `this.$router.back()`
前进: `this.$router.forward()`
## 52、Vue怎么实现跨域（必会）
- 1 **什么是跨域**
跨域指浏览器不允许当前页面的所在的源去请求另一个源的数据。源指
协议，端口，域名。只要这个 3 个中有一个不同就是跨域
- 2 使用Vue-cli脚手架搭建项目时 proxy 解决跨域问题
打开 config/index.js,在 proxy 中添写如下代码：
```javascript
proxy: {
  '/api': { //使用"/api"来代替"http://f.apiplus.c"
    target: 'http://f.apiplus.cn', //源地址
    changeOrigin: true, //改变源
  pathRewrite: {
  '^/api': 'http://f.apiplus.cn' //路径重写
  }
}
```
- 3 **使用  CORS （跨域资源共享）**
  - **1 1 前端设置**：
  前端 Vue 设置 axios 允许跨域携带 cookie（默认是不带 cookie）
  `axios.defaults.withCredentials = true;`
  - **2 2 后端设置**：
  1、 跨域请求后的响应头中需要设置：
  2、 Access-Control-Allow-Origin 为发起请求的主机地址。
  3、 Access-Control-Allow-Credentials，当它被设置为 true 时，允许跨域
  带 cookie，但此时 Access-Control- Allow-Origin 不能为通配符*。
  4、 Access-Control-Allow-Headers，设置跨域请求允许的请求头。
  5、 Access-Control-Allow-Methods，设置跨域请求允许的请求方式。
## 53、Vue 中动画如何实现（必会）
哪个元素需要动画就给那个元素加 transition 标签
进入时 class 的类型分为以下几种:
```
 <name>-enter 
 <name>-enter-active
 <name>-enter-to
```
离开时 class 的类型分为以下几种:
```
<name>-leave
<name>-leave-active
<name>-leave-to
```
如果需要一组元素发生动画需要用标签  `<transition-group><transition-group>`
## 54、你对 Vue.js 的 template 编译的理解？（必会）
**简而言之**，就是先转化成 AST 树，再得到的 render 函数返回 VNode（Vue 的虚拟 DOM 节点）
**首先**，通过 compile 编译器把 template 编译成 AST 语法树（abstract syntaxtree 即 源代码的抽象语法结构的树状表现形式），compile 是 createCompiler 的返回值，createCompiler 是用以创建编译器的。另外 compile 还负责合并option。
**然后**，AST 会经过 generate（将 AST 语法树转化成 render funtion 字符串的过程）得到 render 函数，render 的返回值是 VNode，VNode 是 Vue 的虚拟 DOM节点，里面有（标签名、子节点、文本等等）
## 55、Vue的渲染模板时怎么保留模板中的HTML注释呢？（必会）
在组件中将 comments 选项设置为 true
`<template comments> ... <template>`
## 56、Vue2.0 兼容 IE 哪个版本以上吗？（必会）
不支持 ie8 及以下，部分兼容 ie9 ，完全兼容 10 以上， 因为 Vue 的响应式原理是基于 es5 的 Object.defineProperty(),而这个方法不支持 ie8 及以下。
## 57、Vue  如何去除 URL 中的#（必会）
Vue-Router的URL 会自带
默认使用 hash 模式，所以在路由加载的时候，项目中的
“#”。如果不想使用 “#”， 可以使用 Vue-Router 的另一种模式 `history：new Router ({ mode : 'history', routes: [ ]})` **需要注意的是，当我们启用 history 模式的时候**，由于我们的项目是一个单页面应用，所以在路由跳转的时候，就会出现访问不到静态资源而出现“404”的情况，这时候就需要服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 “index.html” 页面。

## 58、说一下你在 Vue 中踩过的坑（必会）
- 第一个是给对象添加属性的时候，直接通过给 data 里面的对象添加属性然后赋值，新添加的属性不是响应式的。
**解决办法** 通过 Vue.set(对象，属性，值)这种方式就可以达到，对象新添加的属性是响应式的
- 在 created 操作 dom 的时候，是报错的，获取不到 dom，这个时候实例 Vue 实例没有挂载
**解决办法** 通过：Vue.nextTick (回调函数进行获取) 
## 59、在 Vue 中使用插件的步骤（必会）
采用 ES6 的 import ... from ...语法或 CommonJS 的 require()方法引入插件。使用全局方法 `Vue.use( plugin )`使用插件,可以传入一个选项对象 `Vue.use(MyPlugin, { someOption: true })`
## 60、Vue 项目优化的解决方案都有哪些？（必会）
  - 1 使用 mini-css-extract-plugin 插件抽离 css
  - 2 配置 optimization 把公共的 js 代码抽离出来
  - 3 通过 webpack 处理文件压缩
  - 4 不打包框架、库文件，通过 cdn 的方式引入
  - 5 小图片使用 base64
  - 6 配置项目文件懒加载
  - 7 UI 库配置按需加载
  - 8 开启 Gzip 压缩
## 61、使用 Vue 的时候加载造成页面卡顿，该如何解决？（必会）
Vue-Router 解决首次加载缓慢的问题。懒加载简单来说就是按需加载。
像 Vue 这种单页面应用，如果没有应用懒加载，运用 webpack 打包后的文件将会异常的大，造成进入首页时， 需要加载的内容过多，时间过长，会出现长时间的白屏，即使做了 loading 也是不利于用户体验，而运用懒加载 则可以将页面进行划分，需要的时候加载页面，可以有效的分担首页所承担的加载压力，减少首页加载用时
## 62、请说出 Vue-cli 项目中 src 目录每个文件夹和文件的用法？（必会）
- 1 assets 文件夹是放静态资源
- 2 components 是放组件
- 3 router 是定义路由相关的配置
- 4 view 视图
- 5 app.Vue 是一个应用主组件
- 6 main.js 是入口文件
## 63、你知道 style 上加 scoped 属性的原理吗（必会）
- **1 什么是  scoped**
在 Vue 组件中，为了使样式私有化（模块化），不对全局造成污染，可以在style 标签上添加 scoped 属性以表示它的只属于当下的模块，局部有效。如果一个项目中的所有 Vue 组件 style 标签全部加上了 scoped，相当于实现了样式的私有化。如果引用了第三方组件，需要在当前组件中局部修改第三方组件的样式，而又不想去除 scoped 属性造成组件之间的样式污染。此时只能通过穿透scoped 的方式来解决，选择器
- **2 scoped  的实现原理：**
Vue 中的 scoped 属性的效果主要通过 PostCSS 转译实现，如下是转译前的
Vue 代码：
  ```vue
  <template>
    <div>Vue.js scoped</div>
  </template>
  <style scoped>.scoped {font-size:14px;}</style>
  ```
  浏 览 器 渲 染 后 的 代 码 ：
  ```html
  <div  data-v-fed36922>Vue.js scoped</div>
  <style scoped>
      .scoped[data-v-fed36922]{
        font-size:14px;
      }
  </style>

  ```
即：PostCSS 给所有 dom 添加了一个唯一不重复的动态属性，然后，给 CSS 选择器额外添加一个对应的属性选择器来选择该组件中 dom，这种做法使得样式私有化
## 64、说说你对 SPA 单页面的理解，它的优缺点分别是什么？必会）
单页 Web 应用 (single-page application 简称为 SPA) 是一种特殊的Web 应用。它将所有的活动局限于一个 Web 页面中，仅在该 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成了，SPA 不会因为用户的操作而进行页面的重新加载或跳转。取而代之的是利用 JavaScript 动态的变换 HTML 的内容，从而实现 UI 与用户的交互。由于避免了页面的重新加载，SPA 可以提供较为流畅的用户体验。得益于 ajax，我们可以实现无跳转刷新，又多亏了浏览器的 histroy 机制，我们用 hash 的变化从而可以实现推动界面变
化。从而模拟元素客户端的单页面切换效果：SPA 被人追捧是有道理的，但是它也有不足之处。当然任何东西都有两面性，以下是卤煮总结的一些目前 SPA 的优缺点：
- **优点：**
1、 无刷新界面，给用户体验原生的应用感觉
2、 节省原生（android 和 ios）app 开发成本
3、 提高发布效率，无需每次安装更新包。这个对于 ios 开发人员来说印象尤
其深吧。
4、 容易借助其他知名平台更有利于营销和推广
5、 符合 web2.0 的趋势
- **缺点：**
1、效果和性能确实和原生的有较大差距
2、各个浏览器的版本兼容性不一样
3、业务随着代码量增加而增加，不利于首屏优化
4、某些平台对 hash 有偏见，有些甚至不支持 pushstate
5、不利于搜索引擎抓取
## 65、怎样理解 Vue 的单向数据流？（必会）
数据从父级组件传递给子组件，只能单向绑定。子组件内部不能直接修改从父级传递过来的数据。
所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级prop 的更新会向下流动到子组件中，但是反过来则不行。
这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。额外的，每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。
这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。子组件想修改时，只能通过由父组件修改。$emit 派发一个自定义事件，父组件接收到后，由父组件改
## 66、VNode 是什么？什么是虚拟  DOM ？（高薪常问）
1. **VNode  是什么**
VNode 是 JavaScript 对象，VNode 表示 Virtual DOM，用 JavaScript 对象来描述真实的 DOM 把 DOM 标签，属性，内容都变成对象的属性。就像使用 JavaScript 对象对一种动物进行说明一样
`{name: 'Hello Kitty', age: 1, children: null}`
2. **VNode  的作用**
通过 render 将 template 模版描述成 VNode，然后进行一系列操作之后形成真实的 DOM 进行挂载。
3. **VNode  的优点**
  - 1、兼容性强，不受执行环境的影响。VNode 因为是 JS 对象，不管Node还是浏览器，都可以统一操作，从而获得了服务端渲染、原生渲染、手写渲染函数等能力。
  - 2、减少操作 DOM，任何页面的变化，都只使用 VNode 进行操作对比，只需要在最后一步挂载更新 DOM，不需要频繁操作 DOM，从而提高页面性能。
4. **什么是虚拟  DOM?**
文档对象模型或 DOM 定义了一个接口，该接口允许 JavaScript 之类的语言访问和操作 HTML 文档。
元素由树中的节点表示，并且接口允许我们操纵它们。但是此接口需要付出代价，大量非常频繁的 DOM 操作会使页面速度变慢。
Vue 通过在内存中实现文档结构的虚拟表示来解决此问题，其中虚拟节点（VNode）表示 DOM 树中的节点。当需要操纵时，可以在虚拟 DOM 的 内存中执行计算和操作，而不是在真实 DOM 上进行操纵。
这自然会更快，并且允许虚拟 DOM 算法计算出最优化的方式来更新实际 DOM 结构,一旦计算出，就将其应用于实际的 DOM 树，这就提高了性能，这就是为什么基于虚拟 DOM 的框架（例如 Vue 和 React）如此突出的原因。
## 67、Vue 中如何实现一个虚拟 DOM ？说说你的思路 （高薪常问）
- **首先**，要构建一个 VNode 的类，DOM 元素上的所有属性在 VNode 类实例化出来的对象上都存在对应的属性。例如 tag 表示一个元素节点的名称，text 表示一个文本节点的文本，chlidren 表示子节点等。将 VNode 类实例化出来的对象进行分类，例如注释节点、文本节点、元素节点、组件节点、函数式节点、克隆节点。
- **然后**，通过编译将模板转成渲染函数 render，执行渲染函数 render，在其中创建不同类型的 VNode 类，最后整合就可以得到一个虚拟 DOM（vnode）。
- **最后**，通过 patch 将 vnode 和 oldVnode 进行比较后，生成真实 DOM。
## 68、Vue 作 中操作 data 中数组的方法中哪些可以触发视图更新，哪些不可以，不可以的话有什么解决办法？（高薪常问）
- `push()、pop()、shift()、unshift()、splice()、sort()、reverse()`这些方法**会改变**被操作的数组； 
- `filter()、concat()、 slice()`这些方法**不会改变**被操作的数 组，返回一个新的数组； 
**以上方法都可以触发视图更新。**
<hr>

- 利用索引直接设置一个数组项，例：`this.array[index] = newValue`
- 直接修改数组的长度，例：`this.array.length = newLength`
**以上两种方法不可以触发视图更新；**
**解 决 方 法 1**: 可 以 用 `this.$set(this.array,index,newValue)` 或 `this.array.splice(index,1,newValue)`
**解决方法 2**: 可以用 `this.array.splice(newLength)`
## 69、Vue  中怎么重置  data? （高薪常问）
要初始化 data 中的数据，可以使用 Object.assign()方法，实现重置 data 中的数据，以下就是对该方法的详细介绍，以及如何使用该方法，重置 data 中的数据
1. Object.assign() 方法基本定义
Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对
象复制到目标对象。它将返回目标对象。
用法： `Object.assign(target, ...sources)`，第一个参数是目标对象，第二个参数是源对象，就是将源对象属性复制到目标对象，返回目标对象
2. 具体使用方式
使用 `Object.assign()`，`vm.$data` 可以获取当前状态下的 data，`vm.$options.data(this)` 可 以 获 取 到 组 件 初 始 化 状 态 下 的 data ， 
复 制 `Object.assign(this.$data, this.$options.data(this))`
// **注意加 this，不然取不**到 `data() { a: this.methodA } `中的 `this.methodA`。
## 70、如何对 Vue 首屏加载实现优化? ?（高薪常问）
  1. 把不常改变的库放到 index.html 中，通过 cdn 引入
  2. Vue 路由的懒加载
  3. 不生成 map 文件
  4. Vue 组件尽量不要全局引入
  5. 使用更轻量级的工具库
  6. 开启 gzip 压缩
  7. 首页单独做服务端渲染
## 71 、 Vue 的 的  nextTick  的原理是什么? ?（高薪常问）
1. 为什么需要 nextTick ，Vue 是异步修改 DOM 的并且不鼓励开发者直接接触 DOM，但有时候业务需要必须对数据更改--刷新后的 DOM 做相应的处理，这时候就可以使用 `Vue.nextTick(callback)` 这个 api 了。
2. 理解原理前的准备 首先需要知道事件循环中宏任务和微任务这两个
概念,常见的宏任务有 script, setTimeout, setInterval, setImmediate, I/O,
UI rendering 常见的微任务有 process.nextTick(Nodejs),Promise.then(),MutationObserver;
3. 理解 nextTick 的原理正是 Vue 通过异步队列控制 DOM 更新和
nextTick 回调函数先后执行的方式。如果大家看过这部分的源码，会发现其中做了很多 isNative()的判断，因为这里还存在兼容性优雅降级的问题。可见 Vue开发团队的深思熟虑，对性能的良苦用心。
## 72、在 Vue  实 例 中 编 写 生 命 周 期 hook  或 其 他option/propertie  时，为什么不使用箭头函数？ （高薪常问）
箭头函数自己没有定义 this 上下文，而是绑定到其父函数的上下文中。当你在 Vue 程序中使用箭头函数（=>）时，this 关键字病不会绑定到 Vue 实例，因此会引发错误。所以强烈建议改用标准函数声明。
## 73、is 这个特性你有用过吗？主要用在哪些方面？（高薪常问）
1. 动态组件
`<component :is="componentName"></component>` componentName 可以是
在本页面已经注册的局部组件名和全局组件名,也可以是一个组件的选项对象。当控制 componentName 改变时就可以动态切换选择组件。
2. is 的用法
有些 HTML 元素，诸如 `<ul>、<ol>、<table>和<select>`，对于哪些元素可以出现在其内部是有严格限制的。
而有些 HTML 元素，诸如 `<li>、<tr> 和 <option>`，只能出现在其它某些特定的元素内部。
```html
<ul>
  <card-list></card-list>
</ul>
所以上面<card-list></card-list>会被作为无效的内容提升到外部，并导
致最终渲染结果出错。应该这么写：
<ul>
  <li is="cardList"></li>
</ul>
```
## 74、scss 是什么？在 i Vue.cli  中的安装使用步骤是？有哪几大特性？（高薪常问）
答：**css 的预编译**。
**使用步骤：**
- 第一步：先装 css-loader、node-loader、sass-loader 等加载器模块
- 第二步：在 build 目录找到 webpack.base.config.js，在那个 extends 属性中加一个拓展.scss
- 第三步：在同一个文件，配置一个 module 属性
- 第四步：然后在组件的 style 标签加上 lang 属性 ，例如：lang=”scss”
**特性:**
- 可以用变量，例如（ $变量名称=值）；
- 可以用混合器，例如（）
- 可以嵌套
## 75 、请详细介绍一些 n package.json  中的配置的作用（了解）
  - 1、 Name:项目名称
  - 2、 Version: 项目版本
  - 3、 Description: 项目描述
  - 4、 Author：作者
  - 5、 Prinate：项目是否私有
  - 6、 Scripts:npm run *** 命令用于调用 node 执行的.js 文件
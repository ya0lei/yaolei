## 1.什么是MVVM？
**MVVM**是Model-View-ViewModel的缩写。
> MVVM是一种设计思想。

- Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；
- View 代表UI 组件，它负责将数据模型转化成UI 展现出来，
- ViewModel 是一个同步View 和 Model的对象。

在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。
ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

## 2.mvvm和mvc区别？它和其它框架（jquery）的区别是什么？哪些场景适合？
mvc和mvvm其实区别并不大。都是一种设计思想。
主要就是mvc中Controller演变成mvvm中的viewModel。
mvvm主要解决了mvc中大量的DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。
场景：数据操作比较多的场景，更加便捷
## 3.vue的优点是什么？
1. **低耦合**。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。
2. **可重用性**。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。
3. **独立开发**。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计。
4. **可测试**。界面素来是比较难于测试的，而现在测试可以针对ViewModel来写。
## 4. 组件之间的传值？
- 父组件与子组件传值
- 父组件通过标签上面定义传值
- 子组件通过props方法接受数据
- 子组件向父组件传递数据
- 子组件通过$emit方法传递参数
## 5.路由之间跳转
声明式（标签跳转） 编程式（ js跳转）
## 6.vue.cli中怎样使用自定义的组件？有遇到过哪些问题吗？
- 第一步：在components目录新建你的组件文件（indexPage.vue），script一定要export default {}
- 第二步：在需要用的页面（组件）中导入：import indexPage from '@/components/indexPage.vue'
- 第三步：注入到vue的子组件的components属性上面,components:{indexPage}
- 第四步：在template视图view中使用，
例如有indexPage命名，使用的时候则index-page
## 7.vue如何实现按需加载配合webpack设置
webpack中提供了 **require.ensure()** 来实现按需加载。以前引入路由是通过import 这样的方式引入，改为const定义的方式进行引入。
- 不进行页面按需加载引入方式：import home from '../../common/home.vue'
- 进行页面按需加载的引入方式：const home = r => require.ensure( [], () => r (require('../../common/home.vue')))
## 8.vuex面试相关
### （1）vuex是什么？怎么使用？哪种功能场景使用它？
vue框架中状态管理。在main.js引入store，注入。新建一个目录store，….. export 。场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车
### （2）vuex有哪几种属性？
有五种，分别是 State、 Getter、Mutation 、Action、 Module
#### vuex的State特性
**A、** Vuex就是一个仓库，仓库里面放了很多对象。其中state就是数据源存放地，对应于一般Vue对象里面的data
**B、** state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个数据的组件也会发生更新
**C、** 它通过mapState把全局的 state 和 getters 映射到当前组件的 computed 计算属性中
#### vuex的Getter特性
**A、** getters 可以对State进行计算操作，它就是Store的计算属性
**B、** 虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用
**C、** 如果一个状态只在一个组件内使用，是可以不用getters
#### vuex的Mutation特性
Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态；Action 可以包含任意异步操作。
### （3）不用Vuex会带来什么问题？
可维护性会下降，想修改数据要维护三个地方；
可读性会下降，因为一个组件里的数据，根本就看不出来是从哪来的；
增加耦合，大量的上传派发，会让耦合性大大增加，本来Vue用Component就是为了减少耦合，现在这么用，和组件化的初衷相背。
## 9.v-show和v-if指令的共同点和不同点
v-show指令是通过修改元素的display的CSS属性让其显示或者隐藏
v-if指令是直接销毁和重建DOM达到让元素显示和隐藏的效果
## 10.如何让CSS只在当前组件中起作用
将当前组件的 `<style>` 修改为`<style scoped>`
## 11.`<keep-alive> </keep-alive>` 的作用是什么?
首先我们可以使用内置组件 <component>实现动态组件的效果。

Vue的内置组件keep-alive 包裹「动态组件」时，会缓存不活的组件实例，而不是销毁它们，也就是说下次显示的时候并不会从开始重新执行组件的生命周期钩子函数。
它是一个抽象的组件，它身 **不会渲染成具体的 DOM 元素**，也不会出现在父组件链中。如果裹不是动态组件则会无效。

当组件在` <keep-alive> `内被切换，它的 activated 和deactivated 这两个生命周期钩子函数将会被对应执行。
## 12.Vue中引入组件的步骤?
- 1）采用ES6的import ... from ...语法或CommonJS的require()方法引入组件
- 2）对组件进行注册,代码如下
```
// 注册Vue.component('my-component', {  template:'
A custom component!
'})
```
- 3）使用组件`<my-component> </my-component>`
## 13.指令v-el的作用是什么?
提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标.可以是 CSS 选择器，也可以是一个 HTMLElement 实例
## 14.在Vue中使用插件的步骤
采用ES6的`import ... from ...`语法或CommonJSd的require()方法引入插件
使用全局方法`Vue.use( plugin )`使用插件,可以传入一个选项对象`Vue.use(MyPlugin, { someOption: true })`
## 15.请列举出3个Vue中常用的生命周期
函数
- created: 实例已经创建完成之后调用,在这一步,实例已经完成数据观测, 属性和方法的运算, watch/event事件回调. 然而, 挂载阶段还没有开始, $el属性目前还不可见
- mounted: el被新创建的 `vm.$el` 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
- activated: keep-alive组件激活时调用
## 16.active-class 是哪个组件的属性？
vue-router模块的router-link组件。
## 17.怎么定义vue-router的动态路由以及如何获取传过来的动态参数？
在router目录下的index.js文件中，对path属性加上/:id。
使用router对象的`params.id`
## 18.vue-router有哪几种导航钩子？
**三种**，
- 一种是全局导航钩子：router.beforeEach(to,from,next)，作用：跳转前进行判断拦截。
- 第二种：组件内的钩子；
- 第三种：单独路由独享组件
## 19.生命周期相关
总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。
- 创建前/后： 
  1. 在beforeCreate阶段，vue实例的挂载元素el和数据对象data都为undefined，还未初始化。
  2. 在created阶段，vue实例的数据对象data有了，el还没有。
- 载入前/后：
  1. 在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。
  2. 在mounted阶段，vue实例挂载完成，data.message成功渲染。
- 更新前/后：当data变化时，会触发beforeUpdate和updated方法。
- 销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在
### （1）什么是vue生命周期
Vue 实例从创建到销毁的过程，就是生命周期。也就是从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。
### （2）vue生命周期的作用是什么
它的生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑。
### （3）vue生命周期总共有几个阶段
可以总共分为8个阶段：创建前/后, 载入前/后,更新前/后,销毁前/销毁后。
- **beforeCreate** 是new Vue()之后触发的第一个钩子，在当前阶段data、methods、computed以及watch上的数据和方法都不能被访问。
- **created** 在实例创建完成后发生，当前阶段已经完成了数据观测，也就是可以使用数据，更改数据，在这里更改数据不会触发updated函数。可以做一些初始数据的获取，在当前阶段无法与Dom进行交互，如果非要想，可以通过vm.$nextTick来访问Dom。
- **beforeMount** 发生在挂载之前，在这之前template模板已导入渲染函数编译。而当前阶段虚拟Dom已经创建完成，即将开始渲染。在此时也可以对数据进行更改，不会触发updated。
- **mounted** 在挂载完成后发生，在当前阶段，真实的Dom挂载完毕，数据完成双向绑定，可以访问到Dom节点，使用$refs属性对Dom进行操作。
- **beforeUpdate** 发生在更新之前，也就是响应式数据发生更新，虚拟dom重新渲染之前被触发，你可以在当前阶段进行更改数据，不会造成重渲染。
- **updated** 发生在更新完成之后，当前阶段组件Dom已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新。
- **beforeDestroy** 发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进行善后收尾工作，比如清除计时器。
- **destroyed** 发生在实例销毁之后，这个时候只剩下了dom空壳。组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁。
### （4）第一次页面加载会触发哪几个钩子
答：第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted 这几个钩子
### （5）DOM 渲染在 哪个周期中就已经完成
答：DOM 渲染在 mounted 中就已经完成了。
### （6）简单描述每个周期具体适合哪些场景
答：生命周期钩子的一些使用方法：
- beforecreate : 可以在这加个loading事件，在加载实例时触发
- created : 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用
- mounted : 挂载元素，获取到DOM节点
- updated : 如果对数据统一处理，在这里写上相应函数
- beforeDestroy : 可以做一个确认停止事件的确认框
- nextTick : 更新数据后立即操作dom
## 20.说出至少4种vue当中的指令和它的用法？
v-if：判断是否隐藏；v-for：数据循环；v-bind:class：绑定一个属性；v-model：实现双向绑定
## 21.vue-loader是什么？使用它的用途有哪些？
解析.vue文件的一个加载器。
用途：js可以写es6、style样式可以scss或less、template可以加jade等
## 22.scss是什么？在vue.cli中的安装使用步骤是？有哪几大特性？
答：css的预编译。
**使用步骤**：
> - 第一步：先装css-loader、node-loader、sass-loader等加载器模块
> - 第二步：在build目录找到webpack.base.config.js，在那个extends属性中加一个拓展.scss
> - 第三步：在同一个文件，配置一个module属性
> - 第四步：然后在组件的style标签加上lang属性 ，例如：lang=”scss”

**特性**:
- 可以用变量，例如（$变量名称=值）；
- 可以用混合器，例如（）
- 可以嵌套
## 23.为什么使用key？
当有相同标签名的元素切换时，需要通过 key 特性设置唯一的值来标记以让 Vue 区分它们，否则 Vue 为了效率只会替换相同标签内部的内容。
## 24.为什么避免 v-if 和 v-for 用在一起
当 Vue 处理指令时，v-for 比 v-if 具有更高的优先级，通过v-if 移动到容器元素，不会再重复遍历列表中的每个值。取而代之的是，我们只检查它一次，且不会在 v-if 为否的时候运算 v-for。
## 25.VNode是什么？虚拟 DOM是什么？
Vue在 页面上渲染的节点，及其子节点称为“虚拟节点 (Virtual Node)”，简写为“VNode”。“虚拟 DOM”是由 Vue 组件树建立起来的整个 VNode 树的称呼。
## 26.路由的两种模式了解多少？
**hash:**
1. 可以改变URL，但不会触发页面重新加载（hash的改变会记录在window.hisotry中）因此并不算是一次http请求，所以这种模式不利于SEO优化。
2. 只能修改#后面的部分，因此只能跳转与当前URL同文档的URL。
3. 通过window.onhashchange监听hash的改变，借此实现无刷新跳转的功能。

**hisory：**
1. 新的URL可以是与当前URL同源的任意 URL，也可以与当前URL一样，但是这样会把重复的一次操作记录到栈中。
2. 通过history对象的pushState、replaceState实现无刷新跳转的功能。

**注意点：**
	history模式下，vue-router跳转到某个页面后，因为此时是前端路由控制页面跳转，虽然url改变，但是页面只是内容改变，并没有重新请求，所以这套流程没有任何问题。但是，如果在当前的页面刷新一下，此时会重新发起请求，如果后端服务器没有匹配到当前url，就会出现404的页面。
    而hash模式不会出现这个问题，因为hash虽然可以改变URL，但不会被包括在HTTP请求中。它被用来指导浏览器动作，并不影响服务器端，因此，改变hash并没有改变url，所以页面路径还是之前的路径，服务器不会拦截。
	所以，在使用history模式时，要注意需要服务端的地址可访问，否则就会出现404的尴尬场景。
## 27.你知道计算属性和watch的区别吗？
Computed本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图。
适用于计算比较消耗性能的计算场景。当表达式过于复杂时，在模板中放入过多逻辑会让模板难以维护，可以将复杂的逻辑放入计算属性中处理。
Watch没有缓存性，更多的是观察的作用，可以监听某些数据执行回调。当我们需要深度监听对象中的属性时，可以打开deep：true选项，这样便会对对象中的每一项进行监听。这样会带来性能问题，优化的话可以使用字符串形式监听。
## 28.组件中的data为什么是一个函数？
因为组件是用来复用的，且 JS 里对象是引用关系，如果组件中data 是一个对象，那么这样作用域没有隔离，子组件中的 data属性值会相互影响。

如果组件中 data 选项是一个函数，那么每个实例可以维护一份返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相响；而 new Vue 的实例，是不会被复用的，因此不存在引用对的问题。
## 29.mixins有了解过吗？
vue混入方案mixin，借助该方法我们可以实现组件的逻辑复用，简代码。一个mixin对象包含vue实例的所有组件选项，并且各个项将按照一定的规则进行合并。
- data数据对象在内部会进行递归合并，并在发生冲突时以组件据优先。
- 同名钩子函数将合并为一个数组，因此都将被调用。另外，混对象的钩子将在组件自身钩子之前调用。
- 值为对象的选项，例如 methods、components 和directives，将被合并为同一个对象。两个对象键名冲突时，取件对象的键值对。
## 30.双向数据绑定的原理是什么？
Object.defineProperty这个方法中的get跟set,get就是在读取对象属性值的时候调用的方法，set就是在设置对象属性值的时候调用的方法，通过这两个方法，我们就可以实现数据劫持。
	
想要实现双向绑定，首先要对数据进行劫持监听，所以我们需要设一个监听器Observer，用来监听所有属性。如果属性发上变化了就需要告诉订阅者Watcher看是否需要更新。因为订阅者是有很个，所以我们需要有一个消息订阅器Dep来专门收集这些订阅者，后在监听器Observer和订阅者Watcher之间进行统一管理的。着，我们还需要有一个指令解析器Compile，对每个节点元素进扫描和解析，将相关指令对应初始化成一个订阅者Watcher，并换模板数据或者绑定相应的函数，此时当订阅者Watcher接收到应属性的变化，就会执行对应的更新函数，从而更新视图。

因此接下去我们执行以下3个步骤，实现数据的双向绑定：

1. 实现一个监听器Observer，用来劫持并监听所有属性，如果有动的，就通知订阅者。
2. 实现一个订阅者Watcher，可以收到属性的变化通知并执行相的函数，从而更新视图。
3. 实现一个解析器Compile，可以扫描和解析每个节点的相关令，并根据初始化模板



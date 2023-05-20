# VUE3

### vue2配置



####关闭eslint检查

写在config的module.exports中

```
lintOnSave: false, 
```

#### 自动打开网页

写在package.json中,自动打开,热更新,根地址,+8080

```
"serve": "vue-cli-service serve --open --hot --host 127.0.0.1 --port8080",
```

ESlint语法检查配置自动保存时格式化

```
"editor.codeActionsOnSave": {
        "source.fixAll": true
    },
```

####随机模拟请求错误

放在请求前面,try里面

```
if (Math.random() > 0.5) {
          JSON.parse("随机模拟请求失败");
        }
```

#### 请求拦截器

```
// 前提：配置请求头，需要访问 Vuex 容器，又因为是在js文件中访问 store，因此需要引入以下代码
import store from "@/store";
// 利用请求拦截器（请求发送之前做某些事情），配置请求头（主要处理token问题），配置完后，在向服务器发送请求时，可以携带一些参数（token）
request.interceptors.request.use(
  function (config) {
    const { 变量名（state里的变量，保存的是请求头需要携带的参数，一般是token） } = store.state;
    if (变量名 && 变量名.xxx) {
      config.headers.Authorization = `Bearer ${变量名.xxx}`;
    }
    return config;
  },
  function (error) {
    // 当请求拦截器发生处理错误，终止执行，该请求的后续操作同时也会终止
    return Promise.reject(error);
  }
);
```

#### Flex

父元素设置了flex,让某一个子元素不受flex影响,添加

```
flex:unset;
```



#### 图片403错误

在单个元素上设置

```
<img src="http://……" referrerPolicy="no-referrer">
```

或者直接在html的head设置

```
 <meta name="referrer" content="no-referrer" />
```

​	
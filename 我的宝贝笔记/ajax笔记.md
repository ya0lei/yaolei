# ajax笔记

jQuery中get请求,获取服务器上的资源

```
$.get('服务器网络地址')
```

```
$.get('服务器网络地址',  {},  function(res){})
```

jQuery中ajax

```js
    $.ajax({
        	//GET:获取,删除数据;POST:添加数据
            type: "GET(POST)",
        	//协议+服务器地址+相应操作的接口
            url: "http://",
        	//相当于在网址后拼接?id:1,筛选出对应的内容
            data: {
                id:1,
            },
        	//服务器响应触发
            success: function (res) {
                console.log(res);
            },
        	//服务器不响应触发
        	error:function(res){
                alert('404'+res.statusText)
            }
        });
```

 模板引擎的使用

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./lib/template-web.js"></script>
</head>
<body>
    <div class="content"></div>
    <!-- 模板 -->
    <script type="text/html" id="box">

        <!-- 标签有效果 -->
        <span>{{@ name}}</span>
        <!-- if else判断 -->
        {{if sex=='男'}}
                <p>男的</p>
        {{else if sex=='雄'}}
                <p>雄性</p>
        {{else}}
                <p>女的</p>
        {{/if}}
        <!-- 循环 -->
        <ul>
            {{each arr item i}}
            <li>item:{{item.hi}}-----index:{{i}}</li>
            {{/each}}
        </ul>
        <!-- 调用函数 -->
        {{1|fn}}
    </script>
    <!-- 数据 -->
    <script>
        const obj={
            name:'<h1>姚磊</h1>', 
            sex:'雄',
            arr:[
                {hi:'哈哈',},
                {hi:'嘿嘿',},
                {hi:'嘻嘻'}
                ]                                                            
        }
        // 写一个函数
        template.defaults.imports.fn=function(value){
            return value+1;
        }
        const html=template('box',obj)
        document.body.innerHTML=html
        // document.querySelector('.content').innerHTML=html
    </script>
</body>
</html>
```


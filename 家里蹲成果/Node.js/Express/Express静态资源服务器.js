const express = require('express')//导入
const app = express()// 创服务
// 我们可以通过express.static()向外提供静态资源,注意:参数只能是目录,目录下的所有文件视为静态资源的访问对象
//  如果想要让多个目录下的文件都当作静态资源输出,那就多写几个app.use()
// app.use(express.static('../database')) //用户舒服
// 上面那个用户操作太便捷,可以强制添加一个路径前缀,让用户每次访问的时候都要在文件名前加上
app.use('/abc',express.static('../database')) // 用户难受
app.listen(80, ()=>{// 跑服务
    console.log("http://127.0.0.1");
})

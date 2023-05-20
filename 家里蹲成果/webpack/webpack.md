#webpack
作用:第三方模块包,打包压缩降级代码

##webpack在node中下载
1.yarn init(初始化
2.一直回车默认作者名啥的
3.yarn add webpack webpack-cli -D(下载到开发环境)
4.package.json文件下添加"scripts":{"build":"webpack"}

##webpack打包文件
1.src下必须有个index.js,作为打包的入口
2.自己的js业务代码写在src下,引入到index.js
3.yarn build(打包,生成文件dist/main.js)

工具类放在 
项目文件/src/tool/tool.js

静态资源,网页html文件,字体图标放在
项目文件/public/index.html

web打包需要打包css,html,字体图标,图片等文件类型去下官网插件在webpack.config中配置

##webpack开发服务器
每次更新代码,webpack都要重新打包再运行,十分麻烦,使用开发服务器,代码运行在内存中,自动更新
1.yarn add webpack-dev-server -D(node中下载)
2."script":{"serve":"webpack serve"}(package.json中配置命令
3.yarn serve(运行访问本地服务器localhost:8080/#/即可看到网页
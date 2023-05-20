# vue2_demo包含:

#  excel 的导入导出

### 组件需要的插件:

 1.将 excel 文件的数据抽离成数组格式,也可将数组格式转成 excel 或者 zip 文件,记得使用 npm 下载这个插件,否则可能出错 

2.因为 excel 文件还挺大的,使用组件的懒加载,写法:import("组件地址").then((abc)=>{abc.fn}),这个 abc 是这个组件的对象,abc.XXX 可以拿到组件中按需导出的方法 

3.想要导出的文件是 zip 文件

```js
npm install xlsx file-saver -S
npm install script-loader -S -D
npm install jszip
```

### 文件介绍:

excelUpload:封装好的 excel 导入方法,无需修改,传入两个方法即可使用
Export2Excel:封装好的 excel 导出方法
Export2Zip:封装好的 zip 导出方法
father_excel:使用上述方法的组件,导入,导出的数据处理方法也在里面

### 重点语法:

```js

```

#  文件上传

### 重点语法:

有时候文件上传,后端要求的文件格式可能是blob或者formdata,那么就需要做一些处理

**blob:**file表单的数据转blob二进制文件流格式,file表单获取的文件格式是file,如果这个文件是图片,把这个file格式的文件赋给图片的src是无法显示图片的,转成blob格式,可以正常显示:
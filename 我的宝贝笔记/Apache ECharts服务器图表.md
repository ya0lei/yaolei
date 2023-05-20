#Apache ECharts服务器图表

### 1.安装

echarts支持多种安装模式,这里我们使用npm

```
npm install echarts --save
```

### 2.引入

 基于准备好的dom，初始化echarts实例

```
import * as echarts from 'echarts';
var myChart = echarts.init(document.getElementById('main'));
```

### 3.准备父容器

**1**.首先,我们需要定义一个div,设置宽高,图表的大小默认为此大小

```
<div id="main" style="width: 600px;height:400px;"></div>
```

2.可以自定义图表的大小,父容器没有宽高or你希望图表不等于父容器大小时使用

- [ ] ```
    var myChart = echarts.init(document.getElementById('main'), null, {
      width: 600,
      height: 400
    });
  ```


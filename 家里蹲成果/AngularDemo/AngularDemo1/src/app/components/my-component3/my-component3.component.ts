import { Component } from '@angular/core';
// 引入服务
import { MyServeService } from '../.././serves/my-serve.service'
// 引入路由获取参数的东西
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-component3',
  templateUrl: './my-component3.component.html',
  styleUrls: ['./my-component3.component.scss']
})
export class MyComponent3Component {
  // 注册服务
  constructor(private MyServeService: MyServeService, private routerInfo: ActivatedRoute) { }
  // 父传子数据
  title = "我是父组件传递的title"

  // 子传父的数据
  items = ['item1', 'item2', 'item3'];
  // 子组件的自定义事件来触发addItem
  addItem(newItem: string) {
    this.items.push(newItem)
  }
  // 服务数据
  lists = this.MyServeService.getList()
  // 这里放方法
  addList() {
    this.MyServeService.addList("小程序")
  }
  // 主要关注三个生命周期 
  // 组件初始化
  ngOnInit() {
    // 初始化打印服务
    console.log(this.MyServeService)
    console.log(this.MyServeService.getList())
    // 拿到路由参数对象
    console.log(this.routerInfo)
    // 拿到路由参数对象里面的值
    console.log(this.routerInfo.snapshot.queryParams)
    // params获取不到,原因未知
    console.log(this.routerInfo.snapshot.params)
  }
  // 组件数据更新
  ngOnChanges() {

  }

  // 组件销毁
  ngOnDestroy(): void {

  }

}

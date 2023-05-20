// 服务的使用
// 1.cli创建文件
// 2.手动在app.model.ts文件中引入MyServeService
// 3.手动在app.model.ts文件中的providers中引入MyServeService
// 4.在需要服务的模块中import引入
// 5.在class的constructor中注册
import { Injectable } from '@angular/core';
// 服务就是一个函数,用来存放数据和方法
@Injectable({
  // 默认注入到根模块app.module.ts
  // root可改为某个具体模块的名字,使用懒加载的模式注入
  providedIn: 'root'
})
export class MyServeService {

  constructor() { }
  // 数据
  list: Array<string> = ['Angular框架', 'React框架', 'Vue框架']
  // 方法
  // 获取列表
  getList() {
    return this.list;
  }
  // 给列表添加数据
  addList(str: string) {
    this.list.push(str)
  }
}

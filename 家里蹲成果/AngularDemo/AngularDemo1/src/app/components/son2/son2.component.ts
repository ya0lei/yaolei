import { Component } from '@angular/core';
// 组件插槽的使用
// 1.把templateUrl改成template
// 2.添加占位符<ng-content></ng-content>
// 3.在子组件标签中插入内容

// 多个插槽,想在指定的插槽添加内容
// 1.给插槽添加属性select=aaa
// 2.在子组件标签中插入内容时加上aaa属性

// 想要满足某个条件时,才插入内容
// 太烦不看了
@Component({
  selector: 'app-son2',
  template: `<p>我是子组件son2</p>
              <ng-content></ng-content>
              <p>下面是bbb的插槽</p>
              <ng-content select="[bbb]"></ng-content>`,
  styleUrls: ['./son2.component.scss']
})
export class Son2Component {

}

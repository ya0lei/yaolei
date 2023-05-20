import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent {
  // 子组件接收父组件传递的数据
  @Input() title = ''

  // 自定义事件把数据给父组件
  @Output() sonFn = new EventEmitter<string>();
  // 写一个事件来触发自定义事件
  newSon(value: string) {
    this.sonFn.emit(value)
  }
}

import { Pipe, PipeTransform } from '@angular/core';
// 管道就是一个过滤器, | 前面的值会被传入到 | 后面的函数中,并return出处理后的值
@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + "添加后缀";
  }

}

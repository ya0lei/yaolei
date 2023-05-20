import { Component } from '@angular/core';

@Component({
  selector: 'app-my-components2',
  templateUrl: './my-components2.component.html',
  styleUrls: ['./my-components2.component.scss']
})
export class MyComponents2Component {
  dateStr: any = new Date();
  object={
    a:'aaa',
    b:'bbb',
    c:'ccc'
  }
}

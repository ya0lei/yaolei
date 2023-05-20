// 路由的使用
// 1.import引入文件
// 2.path写路径,自命名
// 3.component写我import引入的文件名
// 4.在app.module.ts文件对应的文件里写路由导航,利用路由导航在路由根节点<router-outlet>中切换渲染

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponentComponent } from './components/my-component/my-component.component'
import { MyComponents2Component } from './components/my-components2/my-components2.component'
import { MyComponent3Component } from './components/my-component3/my-component3.component'
import { SonComponent } from './components/son/son.component'
import { Son2Component } from './components/son2/son2.component'
const routes: Routes = [{
  path: 'mypath1',
  component: MyComponentComponent,
},
{
  path: 'mypath2',
  component: MyComponents2Component
},
{
  path: 'mypath3',
  component: MyComponent3Component,
  // 子路由
  children: [{
    path: 'son',
    component: SonComponent
  }, {
    path: 'son2/:name:age',
    component: Son2Component
  }]
},
// 瞎输地址都指向这个,可以用作404
{
  path: '**',
  component: MyComponentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

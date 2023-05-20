// 核心模块
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
// 想使用表单双向绑定需要引入表单模块,并在@NgModule中引入
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyComponents2Component } from './components/my-components2/my-components2.component';
import { MyPipePipe } from './my-pipe.pipe';
import { MyComponent3Component } from './components/my-component3/my-component3.component';
import { SonComponent } from './components/son/son.component';
// 服务不会自动引入
import {MyServeService} from './serves/my-serve.service';
import { Son2Component } from './components/son2/son2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyComponents2Component,
    MyPipePipe,
    MyComponent3Component,
    SonComponent,
    Son2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  // 运行时的元数据
  providers: [MyServeService],
  // 指定根组件
  bootstrap: [AppComponent]
})
export class AppModule { }

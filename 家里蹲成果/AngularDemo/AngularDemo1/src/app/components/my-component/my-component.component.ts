import { Component, NgModule } from '@angular/core';
// 引入表单控件
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent {
  // 使用表单自定义校验规则需要import引入并在此注入
  constructor(private BBB: FormBuilder) { }
  // 上面写数据
  message = "我是动态的内容message"
  data = {
    name: "",
    age: 13,
    date: new Date()
  }
  flag = true
  lists = [{ name: "杰哥" }, { name: "强哥" }, { name: "许老板" }]
  id = "1234"
  content = "<p>p1</p><p>p2</p><p>p3</p>"
  className = {
    red: "red",
    black: "#000",
    big: "big"
  }
  inputValue = "12222"
  // 表单控件,color:数据类型,可不写 
  color: FormControl = new FormControl('');
  // 表单控件分组的实例
  loginFrom: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })
  // 表单验证绑定的信息
  fromData = {
    name: '',
    password: '',
  }
  // 下面写方法
  submitFn() {
    // 得到表单控件分组里的值
    console.log(this.loginFrom.value)
  }
  // 修改表单控件的值
  btn3() {
    this.color.setValue("red red red");
  }
  // 自定义表单校验规则开始 
  valiDataForm: FormGroup = this.BBB.group({
    username: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(3)],],
    password: ['', [this.passwordVal]],
    phone: ['', [Validators.required, this.phoneVal]]
  })
  // 被上面引入了
  phoneVal(phone: FormControl): object {
    const value = phone.value || '';
    if (!value) {
      return { desc: '请输入手机号' }
    }
    const valid = /^[0-9]{11}$/.test(value)
    return valid ? {} : { desc: '号码必须为11位' }
  }
  // 被上面引入了
  passwordVal(password: FormControl): object {
    const value = password.value || '';
    const Valid = value.match(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,20}$/);
    return Valid ? {} : { passwordValidator: { desc: '密码需要包含英文和数字,长度需在6-20位' } }
  }
  // 打印表单的信息
  valiDataFormFn() {
    console.log(this.valiDataForm)
  }
  // 自定义表单校验规则结束
  btn() {
    alert(this.message);
  }
  // 获得触发事件的元素 
  btn2(e: Event) {
    console.log(e);
    console.log(e.target);
  }

  // 获得表单的值
  inputFn(e: any) {
    console.log(e)
    console.log(e.target.value);
  }
  // 获得表单的值
  inputFn2(inputName: any) {
    console.log(inputName.value);
  }
  // 这里写生命周期  
}

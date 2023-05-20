import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponents2Component } from './my-components2.component';

describe('MyComponents2Component', () => {
  let component: MyComponents2Component;
  let fixture: ComponentFixture<MyComponents2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponents2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponents2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
